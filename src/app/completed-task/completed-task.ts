import { Component, Input } from '@angular/core';

@Component({
  selector: 'completed-task',
  standalone: false,
  templateUrl: './completed-task.html',
  styleUrl: './completed-task.css',
})
export class CompletedTask {
 @Input() item!: any;

 removeTask(){
    this.item.isDeleted=true;
  }
}
