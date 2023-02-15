import { Component, Input } from '@angular/core';
import { Task } from '../tasks'
import { TASKS } from '../mock-task';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent {
  @Input() task: Task = TASKS [0]

}