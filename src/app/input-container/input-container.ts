import { Component, ElementRef, EventEmitter, Output, Input, Type } from '@angular/core';
import { PendingTask } from '../pending-task/pending-task';

interface Item{
  component: Type<PendingTask>;
  inputs?: Record<string,any>
}


@Component({
  selector: 'input-container',
  standalone: false,
  templateUrl: './input-container.html',
  styleUrl: './input-container.css',
})
export class InputContainer {

  @Input() pendingTasks!: any[];
  @Output() taskGenerated = new EventEmitter<ElementRef>();

  addTask(event:ElementRef){
    this.taskGenerated.emit(event);
  }

  getPendingTaskComponents(){
    let componentList: Item[] = [];

    this.pendingTasks.forEach((task)=>{
      let component: Item = {
        component: PendingTask,
        inputs: {item: task}
      }

      componentList.push(component);
    
    })
    return componentList;
  }
}
