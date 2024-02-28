import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LeavesComponent } from './leaves/leaves.component';
import { GestionEmployeeComponent } from './pages/gestion-employee/gestion-employee.component';
import { NosServicesComponent } from './pages/nos-services/nos-services.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'services', component: NosServicesComponent },
    { path: 'contact', component: ContactsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    {
        path: 'admin',
        component: BoardAdminComponent,
        children: [
            {
                path: 'list',
                component: GestionEmployeeComponent,
                outlet: 'adminoutlet',
            },
            {
                path: 'add-employee',
                component: AddEmployeeComponent,
                outlet: 'adminoutlet',
            },
            {
                path: 'leave',
                component: LeavesComponent,
                outlet: 'adminoutlet',
            },
        ],
    },
];
