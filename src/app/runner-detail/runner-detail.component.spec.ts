import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerDetailComponent } from './runner-detail.component';

describe('RunnerDetailComponent', () => {
  let component: RunnerDetailComponent;
  let fixture: ComponentFixture<RunnerDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunnerDetailComponent]
    });
    fixture = TestBed.createComponent(RunnerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
