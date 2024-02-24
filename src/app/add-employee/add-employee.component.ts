import { CommonModule, JsonPipe } from '@angular/common';
import {
  Component,
  Injector,
  Input,
  booleanAttribute,
  effect,
  signal,
} from '@angular/core';
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
import { ProgressSpinnerModule } from 'primeng/progressspinner';

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
    ProgressSpinnerModule,
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private injector: Injector,
    private messageService: AppMessageService
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
  showError() {
    this.messageService.showToast({
      severity: 'error',
      summary: 'Oops !',
      key: 'bc',
      detail: "Une erreur s'est produite, veuillez réessayer plus tard",
    });
  }
  showSuccess() {
    this.messageService.showToast({
      severity: 'success',
      summary: 'Succès!',
      key: 'bc',
      detail: "L'utilisateur a été ajouté avec succès",
    });
  }
  onSubmit() {
    this.isLoading = true;
    this.authService.signup(this.employeeForm.value).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.showSuccess();

        console.log(data);
      },
      error: (err) => {
        this.isLoading = false;
        console.log(err);
        this.showError();
      },
    });
  }
}
