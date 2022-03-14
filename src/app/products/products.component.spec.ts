import { DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ProductService } from '../product.service';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let debugElement: DebugElement;
  let productService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      imports: [FormsModule],
      providers: [ProductService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    productService = TestBed.get(ProductService);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should create product service', () => {
    expect(productService).toBeTruthy();
  })

  xit('should test filter product list (done)', (done) => {
    component.searchItem = 'Pen';
    let productSpy = spyOn(productService, 'filterProductList').and.callThrough();
    component.onSearch({});

    productSpy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      const value = debugElement.query(By.css('#product_0')).nativeElement.innerText;
      expect(value).toContain(component.searchItem);
      done();
    });
  });

  xit('should test filter product list (async)', async(() => {
    component.searchItem = 'Pen';
    let productSpy = spyOn(productService, 'filterProductList').withArgs('Pen').and.callThrough();
    component.onSearch({});

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const value = debugElement.query(By.css('#product_0')).nativeElement.innerText;
      expect(value).toContain(component.searchItem);
    });
  }));

  xit('should test filter product list (fakeAsync)', fakeAsync(() => {
    component.searchItem = 'Pen';
    let productSpy = spyOn(productService, 'filterProductList').withArgs('Pen').and.callThrough();
    component.onSearch({});
    tick();
    fixture.detectChanges();
    const value = debugElement.query(By.css('#product_0')).nativeElement.innerText;
    expect(value).toContain(component.searchItem);
  }));

  xit('Example - fakeAsync and tick - tests the asynchronous code in synchronous way',
    fakeAsync(() => {
      let isLoggedIn = false;
      setTimeout(() => {
        isLoggedIn = true;
      }, 100);
      expect(isLoggedIn).toBe(false);
      tick(50);
      expect(isLoggedIn).toBe(false);
      tick(50);
      expect(isLoggedIn).toBe(true);
    }));
});
