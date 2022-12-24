import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, delete: boolean }
  ) { }

  ngOnInit(): void {
    // this.title = this.dialogRef.
  }
  nameInput: string = '';
  priceInput: number | string = '';
  descriptionInput: string = '';

  ok(): void {
    if (this.data.delete) {
      this.dialogRef.close({ confirmDelete: true })
      return
    }

    this.dialogRef.close(
      {
        name: this.nameInput,
        price: this.priceInput,
        description: this.descriptionInput
      })
  }

  cancel(): void {
    this.dialogRef.close({})
  }
}