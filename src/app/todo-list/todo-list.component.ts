import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Observable } from 'rxjs';
import { Task } from './task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  tasks$: Observable<Task[]> = this.taskService.getTaskList();

  newTaskText: string;

  wasAddButtonTouched = false;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  addTask(): void {
    this.wasAddButtonTouched = true;
    if (this.newTaskText.length > 3) {
      this.taskService
        .addTask({ text: this.newTaskText, isDone: false })
        .subscribe(res => {
          this.newTaskText = '';
          this.wasAddButtonTouched = false;
        });
    }
  }

  removeTasks(): void {
    this.taskService.removeFinishedTasks().subscribe();
  }
}
