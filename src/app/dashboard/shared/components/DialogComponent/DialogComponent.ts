import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

interface DialogData {
  title: string;
  message: string;
}

@Component({
  selector: 'app-dialog-component',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './DialogComponent.html',
})
export class DialogComponent {
  public dialogData: DialogData = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<DialogComponent>);

  confirm() {
    this.dialogRef.close(true);
  }

  cancelar() {
    this.dialogRef.close(false);
  }
}
