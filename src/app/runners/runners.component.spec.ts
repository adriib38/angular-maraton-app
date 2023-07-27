import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnersComponent } from './runners.component';

describe('RunnersComponent', () => {
  let component: RunnersComponent;
  let fixture: ComponentFixture<RunnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunnersComponent]
    });
    fixture = TestBed.createComponent(RunnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
