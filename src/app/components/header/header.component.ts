import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutService } from '../../_services/layout.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterOutlet, MatToolbarModule, CommonModule, RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {
    constructor(
        public layoutService: LayoutService,
        public dialog: MatDialog
    ) {}

    onSubmit(): void {}

    openSignUp() {
        const dialogRef = this.dialog.open(SignupComponent, {
            width: '600px',
        });
    }
    openLogin() {
        const dialogRef = this.dialog.open(LoginComponent, {
            width: '600px',
        });
    }
}
