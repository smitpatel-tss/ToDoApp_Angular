import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingTask } from './pending-task';

describe('PendingTask', () => {
  let component: PendingTask;
  let fixture: ComponentFixture<PendingTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PendingTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
