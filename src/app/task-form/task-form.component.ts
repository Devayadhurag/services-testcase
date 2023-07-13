import { Component } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  task: Task = {
    id: 0,
    title: '',
    description: '',
    completed: false
  };

  constructor(private taskService: TaskService) {}

  addTask(): void {
    this.taskService.addTask({ ...this.task });
    this.task = {
      id: 0,
      title: '',
      description: '',
      completed: false
    };
  }

}
