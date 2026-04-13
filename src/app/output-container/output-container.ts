import { Component, Input, Type } from '@angular/core';
import { CompletedTask } from '../completed-task/completed-task';

interface Item{
  component: Type<CompletedTask>;
  inputs?: Record<string,any>
}

@Component({
  selector: 'output-container',
  standalone: false,
  templateUrl: './output-container.html',
  styleUrl: './output-container.css',
})
export class OutputContainer {
  @Input() completedTasks!: any[];

  getCompletedComponents(){
      let componentList: Item[] = [];
  
      this.completedTasks.forEach((task)=>{
        let component: Item = {
          component: CompletedTask,
          inputs: {item: task}
        }
  
        componentList.push(component);
      
      })
      return componentList;
    }
}
