import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsList: string[] = ['Pen', 'Pencil', 'Eraser'];
  constructor() { }

  getProductList() {
    return of(this.productsList);
  }
  filterProductList(searchItem: any): Promise<any> {
    return of(this.productsList.filter(x => x.toLocaleLowerCase().indexOf(searchItem) > -1)).toPromise();
  }
}
