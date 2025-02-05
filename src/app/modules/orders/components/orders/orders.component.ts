import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CartService } from 'src/app/data/services/cart.service';
import { Product } from 'src/app/data/models/product.model';
import { DiscountService } from 'src/app/data/services/discount.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  cart$!: Observable<Product[]>;
  totalWithoutDiscount$!: Observable<number>;
  totalWithDiscount$!: Observable<number>;
  discount$ = new BehaviorSubject<number>(0);
  availableDiscounts: { value: number, label: string, minTotal: number }[] = [
    { value: 0, label: 'No Discount', minTotal: 0 },
    { value: 10, label: '10% Off', minTotal: 50 },
    { value: 20, label: '20% Off', minTotal: 100 },
    { value: 30, label: '30% Off', minTotal: 200 }
  ];

  constructor(private cartService: CartService, private router: Router, private DiscountService: DiscountService) {}

  ngOnInit() {
    this.cart$ = this.cartService.getCart$();
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalWithoutDiscount$ = this.cart$.pipe(
      map(products => products.reduce((acc, product) => acc + (product.price * product.quantity), 0))
    );

    this.totalWithDiscount$ = combineLatest([this.totalWithoutDiscount$, this.discount$]).pipe(
      map(([total, discount]) => total * (1 - discount / 100))
    );
  }

  onRemoveFromCart(productId: number) {
    this.cartService.dispatchRemoveFromCart(productId);
  }
  
  increaseQuantity(product: Product) {
    const updatedProduct = { ...product, quantity: product.quantity + 1 };
    this.cartService.updateCart(updatedProduct);
    this.calculateTotal();
  }

  decreaseQuantity(product: Product) {
    if (product.quantity > 1) {
      const updatedProduct = { ...product, quantity: product.quantity - 1 };
      this.cartService.updateCart(updatedProduct);
      this.calculateTotal();
    }
  }

  onDiscountChange(event: Event) {
    const discount = (event.target as HTMLSelectElement).value;
    this.discount$.next(Number(discount));
    this.calculateTotal();
  }

  getAvailableDiscounts(total: number) {
    return this.availableDiscounts.filter(discount => total >= discount.minTotal);
  }

  continueShopping() {
    this.router.navigate(['/product']); 
  }

  checkout() {
    combineLatest([this.totalWithDiscount$, this.totalWithoutDiscount$, this.discount$]).pipe(
      map(([totalWithDiscount, totalWithoutDiscount, discount]) => {
        this.DiscountService.setTotalWithDiscount(totalWithDiscount);
        this.DiscountService.setTotalWithoutDiscount(totalWithoutDiscount);
        this.DiscountService.setDiscount(discount);
      })
    ).subscribe();
    this.router.navigate(['/order/delivery']); 
  }
}