import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {
  deliveryForm!: FormGroup;


  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.deliveryForm = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.deliveryForm.valid) {
      this.router.navigate(['/order/checkout']);
    }
  }
}
