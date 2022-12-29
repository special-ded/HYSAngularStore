import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductHttpService } from 'src/app/shared/services/product-http.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(
    private http: ProductHttpService,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { title: string; delete: boolean; id: string }
  ) {}

  nameInput: string = '';
  priceInput: number | string = '';
  descriptionInput: string = '';

  ok(): void {
    console.log('aaaaaaaaaaaaa');

    // this.http
    //   .updateProduct('236d5f45-b465-4385-a4c7-b9b195cda9b8')
    //   .subscribe((data) => console.log(data));

    if (this.data.delete) {
      this.dialogRef.close(this.data.id);
      return;
    }

    this.dialogRef.close({
      name: this.nameInput,
      price: this.priceInput,
      description: this.descriptionInput,
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
