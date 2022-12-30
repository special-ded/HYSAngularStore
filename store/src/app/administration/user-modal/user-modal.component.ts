import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductHttpService } from 'src/app/shared/services/product-http.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
})
export class UserModalComponent {
  constructor(
    private http: ProductHttpService,
    public dialogRef: MatDialogRef<UserModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { title: string; delete: boolean; edit: boolean; id: string }
  ) {}

  nameInput: string = '';
  passwordInput: number | string = '';

  ok(): void {
    if (this.data.delete) {
      this.dialogRef.close(this.data.id);
      return;
    }

    this.dialogRef.close({
      username: this.nameInput,
      password: this.passwordInput,
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
