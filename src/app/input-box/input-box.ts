import { Component, ViewChild, ElementRef, output, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-box',
  standalone: false,
  templateUrl: './input-box.html',
  styleUrl: './input-box.css',
})
export class InputBox {
  @ViewChild('taskInput') input!:ElementRef;

  @Output() taskGenerated = new EventEmitter<ElementRef>();
  addTask(){
      this.taskGenerated.emit(this.input)
  }
}
