import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, TodoListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
