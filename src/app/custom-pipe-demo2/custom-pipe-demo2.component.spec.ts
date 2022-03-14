import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipeDemo2Component } from './custom-pipe-demo2.component';

describe('CustomPipeDemo2Component', () => {
  let component: CustomPipeDemo2Component;
  let fixture: ComponentFixture<CustomPipeDemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPipeDemo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPipeDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
