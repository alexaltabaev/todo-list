import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { MatIconModule } from '@angular/material/icon';
import { TodoListTaskComponent } from './todo-list-task/todo-list-task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoListComponent, TodoListTaskComponent],
  imports: [CommonModule, FormsModule, MatIconModule],
  exports: [TodoListComponent]
})
export class TodoListModule {}
