import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-list-task',
  templateUrl: './todo-list-task.component.html',
  styleUrls: ['./todo-list-task.component.scss']
})
export class TodoListTaskComponent implements OnInit {
  @Input()
  task: Task;

  @Input()
  private taskIndex: number;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  switchStatus(): void {
    this.task.isDone = !this.task.isDone;
    this.taskService.updateTask(this.task, this.taskIndex).subscribe();
  }
}
