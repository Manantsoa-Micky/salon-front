import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ProductsComponent } from './products/products.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LeavesComponent } from './leaves/leaves.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'admin',
    component: BoardAdminComponent,
    children: [
      { path: 'list', component: CardListComponent, outlet: 'adminoutlet' },
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
