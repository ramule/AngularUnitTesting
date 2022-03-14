import { ComponentFixture, TestBed } from '@angular/core/testing';
import { cold, hot } from 'jasmine-marbles';
import { BasicMarbleComponent } from './basic-marble.component';

xdescribe('BasicMarbleComponent', () => {
  let component: BasicMarbleComponent;
  let fixture: ComponentFixture<BasicMarbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicMarbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicMarbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should demonstrate example of marble diagram', () => {
    const source = cold('-x-|');
    const expected = cold('-x-|');

    expect(source).toBeObservable(expected);
  });

  xit('should demonstrate the hot observable and subscription', () => {
    const hotSource = hot('-a-^-b-c|', { a: 10, b: 20, c: 30});
    const subscription = '^----!';
    const coldSource = cold('--x-y|', { x: 20, y: 30});

    expect(hotSource).toBeObservable(coldSource);
    expect(hotSource).toHaveSubscriptions(subscription);
  });
});
