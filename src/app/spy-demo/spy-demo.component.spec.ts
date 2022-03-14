import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyDemoComponent } from './spy-demo.component';

describe('SpyDemoComponent', () => {
  let component: SpyDemoComponent;
  let fixture: ComponentFixture<SpyDemoComponent>;
  let demoList: any;
  let demoFetchData: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpyDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    demoFetchData = jasmine.createSpy('fetchData');
    demoFetchData();

    demoList = jasmine.createSpyObj('demoList', ['add', 'remove', 'refresh']);
    demoList.add();
    demoList.remove(1);
    demoList.refresh();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('jasmine.crateSpy should create demoFetchData is defined', () => {
    expect(demoFetchData).toBeDefined();
  });

  it('jasmine.crateSpy should create demoFetchData is called', () => {
    expect(demoFetchData).toHaveBeenCalled();
  });

  it('jasmine.crateSpy should create demoFetchData is called once', () => {
    expect(demoFetchData.calls.count()).toBe(1);
  });

  it('jasmine.crateSpy should create demoList is defined', () => {
    expect(demoList.add).toBeDefined();
    expect(demoList.remove).toBeDefined();
    expect(demoList.refresh).toBeDefined();
  });

  it('jasmine.crateSpy should create demoList is called', () => {
    expect(demoList.add).toHaveBeenCalled();
    expect(demoList.remove).toHaveBeenCalled();
    expect(demoList.refresh).toHaveBeenCalled();
  });

  it('jasmine.crateSpy should create demoList is called once', () => {
    expect(demoList.add.calls.count()).toBe(1);
    expect(demoList.remove.calls.count()).toBe(1);
    expect(demoList.refresh.calls.count()).toBe(1);
  });
});
