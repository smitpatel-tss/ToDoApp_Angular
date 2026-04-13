import { Component, ElementRef } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'container',
  standalone: false,
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {

  taskList:any[] = [];

  addTask(event:ElementRef): void{
    const task = {
      id: this.taskList.length,
      title: event.nativeElement.value,
      completed: false,
      iat: Date.now(),
      isDeleted: false
    }

    this.taskList.push(task);
    event.nativeElement.value=""
  }
  
  getDesiredTasks(isCompleted: boolean): any[]{

    const desiredTasks:any[] = this.taskList.filter((task)=>(task.completed===isCompleted)&&(!task.isDeleted));
    
    return desiredTasks;
  }


}
