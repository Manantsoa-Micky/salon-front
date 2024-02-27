import { Component, Inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../../_services/user.service';

interface Role {
    nom: string;
    ref: string;
}
@Component({
    selector: 'app-dialog',
    standalone: true,
    imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        CommonModule,
        ReactiveFormsModule,
    ],
    templateUrl: './dialog.component.html',
    styleUrl: './dialog.component.css',
})
export class DialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        private userService: UserService
    ) {}
    isReadOnly: boolean = true;
    dialogForm = this.fb.group({
        email: [this.data.email, [Validators.required, Validators.email]],
        password: [this.data.password, Validators.required],
        firstName: [this.data.firstName, Validators.required],
        lastName: [this.data.lastName, Validators.required],
        username: [this.data.username, Validators.required],
        address: [this.data.address, Validators.required],
        role: [{ value: this.data.role, disabled: true }, Validators.required],
        phone: [this.data.phoneNumber, Validators.required],
        salary: [this.data.salary, Validators.required],
        hours: this.fb.group({
            begin: [this.data.hours.begin, Validators.required],
            end: [this.data.hours.end, Validators.required],
        }),
    });
    roles: Role[] = [
        {
            nom: 'Manager',
            ref: 'manager',
        },
        {
            nom: 'Salarié',
            ref: 'salarié',
        },
    ];

    onSubmit() {
        const newData = { ...this.dialogForm.value, _id: this.data._id };
        delete newData.password;
        console.log(newData);
        this.changeModificationState();
        this.userService.updateUser(newData).subscribe();
    }

    changeModificationState() {
        this.isReadOnly = !this.isReadOnly;
        this.dialogForm.get('role')?.enable();
    }
}
