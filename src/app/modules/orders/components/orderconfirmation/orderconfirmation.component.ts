import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-orderconfirmation',
  templateUrl: './orderconfirmation.component.html',
  styleUrls: ['./orderconfirmation.component.scss']
})
export class OrderConfirmationComponent {
  constructor(public dialogRef: MatDialogRef<OrderConfirmationComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }

}
