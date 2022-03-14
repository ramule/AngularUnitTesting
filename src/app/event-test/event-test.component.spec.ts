import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventTestComponent } from './event-test.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('EventTestComponent', () => {
  let component: EventTestComponent;
  let fixture: ComponentFixture<EventTestComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should "Add Clicks" button is clicked', () => {
    const h1 = de.query(By.css('h1'));
    const btn = de.query(By.css('#btnAdd'));
    btn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.counter).toEqual(parseInt(h1.nativeElement.innerText));
  });
});
