import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/data/services/cart.service';
import { Product } from 'src/app/data/models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { OrderConfirmationComponent } from '../orderconfirmation/orderconfirmation.component';
import { DiscountService } from 'src/app/data/services/discount.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;
  totalPrice: number = 0;
  cartItems: Product[] = [];
  discount: number = 0;
  totalWithoutDiscount: number = 0;

  constructor(private fb: FormBuilder, private router: Router, private cartService: CartService, private dialog: MatDialog, private DiscountService: DiscountService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { totalPrice: number, discount: number };
    if (state) {
      this.totalPrice = state.totalPrice;
      this.discount = state.discount;
    }
  }

  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      paymentMethod: new FormControl('', Validators.required),
      cardNumber: new FormControl('', Validators.required),
      expirationDate: new FormControl('', Validators.required),
      cvv: new FormControl('', Validators.required),
    });

    this.cartService.getCart$().subscribe((items) => {
      this.cartItems = items;
      this.calculateTotalPrice();
    });

    this.DiscountService.getTotalWithDiscount().subscribe(totalWithDiscount => {
      this.totalPrice = totalWithDiscount;
    });

    this.DiscountService.getTotalWithoutDiscount().subscribe(totalWithoutDiscount => {
      this.totalWithoutDiscount = totalWithoutDiscount;
    });

    this.DiscountService.getDiscount().subscribe(discount => {
      this.discount = discount;
    });

    this.checkoutForm.get('paymentMethod')?.valueChanges.subscribe((value) => {
      if (value === 'creditCard') {
        this.checkoutForm.get('cardNumber')?.setValidators([Validators.required]);
        this.checkoutForm.get('expirationDate')?.setValidators([Validators.required]);
        this.checkoutForm.get('cvv')?.setValidators([Validators.required]);
      } else {
        this.checkoutForm.get('cardNumber')?.clearValidators();
        this.checkoutForm.get('expirationDate')?.clearValidators();
        this.checkoutForm.get('cvv')?.clearValidators();
      }
      this.checkoutForm.get('cardNumber')?.updateValueAndValidity();
      this.checkoutForm.get('expirationDate')?.updateValueAndValidity();
      this.checkoutForm.get('cvv')?.updateValueAndValidity();
    });
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      this.dialog.open(OrderConfirmationComponent, {
        width: '300px',
        disableClose: true,
      });
    }
  }
}