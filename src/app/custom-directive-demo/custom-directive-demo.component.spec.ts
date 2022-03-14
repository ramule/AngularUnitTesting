import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HellodirectiveDirective } from '../hellodirective.directive';

import { CustomDirectiveDemoComponent } from './custom-directive-demo.component';

describe('CustomDirectiveDemoComponent', () => {
  let component: CustomDirectiveDemoComponent;
  let fixture: ComponentFixture<CustomDirectiveDemoComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDirectiveDemoComponent, HellodirectiveDirective ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the directive for its changes to div', () => {
    component.username = "Ravi";
    let btn = debugElement.query(By.css('button'));
    btn.triggerEventHandler('click', {});
    fixture.detectChanges();
    let div = debugElement.query(By.css('#customDiv'));

    expect(div.nativeElement.innerText).toContain("Hello Ravi");
    expect(div.nativeElement.style.backgroundColor).toBe("green");

    div.triggerEventHandler('mouseover', null);
    fixture.detectChanges();

    expect(div.nativeElement.style.backgroundColor).toBe('yellow');
    expect(div.nativeElement.style.fontSize).toBe('30px');

    div.triggerEventHandler('mouseout', null);
    fixture.detectChanges();

    expect(div.nativeElement.style.backgroundColor).toBe('green');
    expect(div.nativeElement.style.fontSize).toBe('18px');
  })
});
