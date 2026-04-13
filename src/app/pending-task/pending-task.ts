import { Component, Input } from '@angular/core';

@Component({
  selector: 'pending-task',
  standalone: false,
  templateUrl: './pending-task.html',
  styleUrl: './pending-task.css',
})
export class PendingTask {
  @Input() item!: any;

  completeTask(){
    this.item.completed=true;
  }

  removeTask(){
    this.item.isDeleted=true;
  }
}
