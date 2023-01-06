import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductHttpService } from 'src/app/shared/services/product-http.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { login: boolean }
  ) {}

  ok(): void {
    this.dialogRef.close({
      login: true,
    });
  }

  cancel(): void {
    this.router.navigate(['products']);
    this.dialogRef.close();
  }
}
