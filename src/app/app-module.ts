import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Container } from './container/container';
import { InputContainer } from './input-container/input-container';
import { OutputContainer } from './output-container/output-container';
import { InputBox } from './input-box/input-box';
import { ComponentDisplayer } from './component-displayer/component-displayer';
import { PendingTask } from './pending-task/pending-task';
import { CompletedTask } from './completed-task/completed-task';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Container,
    InputContainer,
    OutputContainer,
    InputBox,
    ComponentDisplayer,
    PendingTask,
    CompletedTask
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
