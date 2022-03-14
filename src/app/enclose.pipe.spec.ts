import { TestBed } from '@angular/core/testing';
import { EnclosePipe } from './enclose.pipe';

describe('EnclosePipe', () => {
  let pipe: EnclosePipe;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnclosePipe],
      imports: [EnclosePipe]
    }).compileComponents();
    pipe = new EnclosePipe();
  });

  it('create an instance', () => {
    // const pipe = new EnclosePipe();
    expect(pipe).toBeTruthy();
  });

  it('[parameter is passed] - should test pipe with parameter', () => {
    expect(pipe.transform('Sample', 'curly')).toBe('{Sample}')
  });

  it('[parameter is not passed] - should test pipe without parameter', () => {
    expect(pipe.transform('Sample')).toBe('Sample')
  });

});
