import { TestBed } from '@angular/core/testing';
import { SquarePipe } from './square.pipe';

xdescribe('SquarePipe', () => {
  let pipe: SquarePipe;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SquarePipe],
      imports: [SquarePipe]
    }).compileComponents();

    pipe = new SquarePipe();
  });


  xit('create an instance', () => {
    const pipe = new SquarePipe();
    expect(pipe).toBeTruthy();
  });

  xit('should check pipe transforms the number to its square', () => {
    expect(pipe.transform(10)).toBe(100);
  })
});
