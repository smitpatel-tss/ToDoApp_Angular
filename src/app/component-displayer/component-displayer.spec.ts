import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDisplayer } from './component-displayer';

describe('ComponentDisplayer', () => {
  let component: ComponentDisplayer;
  let fixture: ComponentFixture<ComponentDisplayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentDisplayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDisplayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
