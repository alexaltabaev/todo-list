import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskList$: BehaviorSubject<Task[]> = new BehaviorSubject([
    { text: 'test', isDone: false }
  ]);
  constructor() {}

  getTaskList(): Observable<Task[]> {
    return this.taskList$;
  }

  addTask(task: Task): Observable<boolean> {
    return new Observable(subscriber => {
      this.taskList$.next([...this.taskList$.value, task]);
      subscriber.next(true);
      subscriber.complete();
    });
  }

  updateTask(task: Task, taskIndex: number): Observable<boolean> {
    return new Observable(subscriber => {
      const taskList = this.taskList$.value.slice();
      taskList[taskIndex] = task;
      this.taskList$.next(taskList);
      subscriber.next(true);
      subscriber.complete();
    });
  }

  removeFinishedTasks(): Observable<boolean> {
    return new Observable(subscriber => {
      const taskList = this.taskList$.value.filter(task => !task.isDone);
      this.taskList$.next(taskList);
      subscriber.next(true);
      subscriber.complete();
    });
  }
}
