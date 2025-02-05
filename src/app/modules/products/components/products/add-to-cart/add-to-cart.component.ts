import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Product } from 'src/app/data/models/product.model';

import { CartService } from 'src/app/data/services/cart.service';
import { ProductsService } from 'src/app/data/services/products.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
    @Input() productId!: number;
    @Output() addToCart = new EventEmitter<number>();
    public product$!: Observable<Product | undefined>;
    public cart$!: Observable<Product[]>;

    constructor(private productsService: ProductsService, private cartService: CartService, private router: Router) { }

    ngOnInit() {
      this.product$ = this.productsService.getActiveProductItem$();
      this.cart$ = this.cartService.getCart$();
    }

    onAddToCart() {
      this.product$.pipe(take(1)).subscribe(product => {
        if (product) {
          this.cartService.dispatchAddToCart(product);
          this.addToCart.emit(this.productId);
          this.router.navigate(['/order']);
        }
      });
      
    }

    onRemoveFromCart(id: number) {
      this.cartService.dispatchRemoveFromCart(id);
  }
}