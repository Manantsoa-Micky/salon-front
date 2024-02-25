import { CommonModule, JsonPipe } from '@angular/common';
import { Component, Injector } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
    selector: 'app-add-employee',
    standalone: true,
    imports: [ReactiveFormsModule, JsonPipe, CommonModule],
    templateUrl: './add-employee.component.html',
    styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private injector: Injector
    ) {}
    employeeForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', Validators.required],
        adress: ['', Validators.required],
        role: ['', Validators.required],
        phone: ['', Validators.required],
        salary: ['', Validators.required],
        hours: this.formBuilder.group({
            begin: ['', Validators.required],
            end: ['', Validators.required],
        }),
    });
    isLoading: boolean = false;
    roles = ['Manager', 'Employé', 'Client'];
    onSubmit() {
        this.isLoading = true;
        this.authService.signup(this.employeeForm.value).subscribe({
            next: (data) => {
                this.isLoading = false;

                console.log(data);
            },
            error: (err) => {
                this.isLoading = false;
                console.log(err);
            },
        });
    }
}
