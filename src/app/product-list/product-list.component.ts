import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {Product} from '../product.model';
import {ProductRowComponent} from '../product-row/product-row.component';

@Component({
  selector: 'in-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

	@Input() productList: Product[];

	@Output() onProductSelected: EventEmitter<Product>;

	private currentProduct: Product;

  constructor() {
  	this.onProductSelected = new EventEmitter();
   }

  ngOnInit() {
  }
  clicked(product: Product):void {
  	this.currentProduct = product;
  	this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
  	if (!product || !this.currentProduct){
  		return false;
  	}
  	return product.sku === this.currentProduct.sku;
  }

}
