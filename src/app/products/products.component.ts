import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  searchItem: string = "";
  prodList: string[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(data => {
      this.prodList = data;
    })
  }

  onSearch(event: any) {
    let val = this.searchItem;
    console.log(this.searchItem);
    this.productService.filterProductList(val).then((data) => {
      this.prodList = data;
    })
  }

}
