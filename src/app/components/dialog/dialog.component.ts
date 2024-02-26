import { Component, Inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-dialog',
    standalone: true,
    imports: [MatDialogModule],
    templateUrl: './dialog.component.html',
    styleUrl: './dialog.component.css',
})
export class DialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
