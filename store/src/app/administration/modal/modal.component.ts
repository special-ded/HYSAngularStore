import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string }
  ) { }

  nameInput: string = '';
  priceInput: number | string = ''
  descriptionInput: string = '';

  ok(): void {
    this.dialogRef.close(
      {
        name: this.nameInput,
        price: this.priceInput,
        descr: this.descriptionInput
      })
  }

  cancel(): void {
    this.dialogRef.close({})
  }
}


