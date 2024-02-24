import { CommonModule, JsonPipe } from '@angular/common';
import { Component, Injector, effect, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../_services/auth.service';
import { ToastModule } from 'primeng/toast';
import { AppMessageService } from '../_services/message.service';

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
    CommonModule,
    ToastModule,
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {
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
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private injector: Injector,
    private messageService: AppMessageService
  ) {}
  error = signal('');
  onSubmit() {
    this.authService.signup(this.employeeForm.value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
        effect(
          () => {
            this.showError();
          },
          { injector: this.injector }
        );
      },
    });
  }
  roles = ['Manager', 'Employé', 'Client'];
  showError() {
    console.log('fired');

    this.messageService.showToast({
      severity: 'error',
      summary: 'Oops !',
      key: 'bc',
      detail: "Une erreur s'est produite, veuillez réessayer plus tard",
    });
  }
}
