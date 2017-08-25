import { Component} from '@angular/core';
import {Product} from './product.model';
import {FormBuilderComponent} from './form-builder/form-builder.component';
// import {FormGroupComponent} from './form-group/form-group.component';

@Component({
  selector: 'in-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
// product: Product;

products: Product[];

constructor(){

	// this.product = new Product ('SKY123', 'Pela Rosa', '/assets/img/git.png', ['dep1', 'dep2'], 50);

	this.products = [
		new Product('MyShoes', 'Black Running Shoes', '/assets/img/git-3.png', ['Men', 'Shoes', 'Runnung Shoes'], 50),
		new Product('SKY145', 'Fanta', '/assets/img/git-1.png', ['dep1', 'dep2'], 80),
		new Product('SKY725', 'Philips', '/assets/img/git-2.png', ['dep1', 'dep2'], 70)
	]

}

selectedProduct (product: Product): void {
	console.log('Product clicked', product);
}

}
