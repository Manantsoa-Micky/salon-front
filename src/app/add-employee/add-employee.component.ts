import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    DropdownModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputMaskModule,
    InputNumberModule,
    ButtonModule,
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {
  employeeForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    firstName: [''],
    lastName: [''],
    username: ['', Validators.required],
    adress: [''],
    role: [''],
    phone: [''],
    salary: [],
    hours: this.formBuilder.group({
      begin: ['8h00'],
      end: ['17h00'],
    }),
  });
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}
  onSubmit() {
    this.authService.signup(this.employeeForm.value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {},
    });
    console.log(this.employeeForm.value);
  }
  roles = ['Manager', 'Employé', 'Client'];
}
