import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { UserService } from '../../_services/user.service';
import { concatMap } from 'rxjs';

export interface EmployeeData {
    _id: string;
    matricule: string;
    firstName: string;
    lastName: string;
    poste: string;
    statut: string;
}

interface Role {
    nom: string;
    ref: string;
}

@Component({
    selector: 'app-gestion-employee',
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatDividerModule,
        MatInputModule,
        MatIconModule,
        MatTableModule,
        MatPaginator,
        MatPaginatorModule,
        MatTabsModule,
        MatSelectModule,
        MatButtonModule,
        MatDialogModule,
        ReactiveFormsModule,
    ],
    templateUrl: './gestion-employee.component.html',
    styleUrl: './gestion-employee.component.css',
})
export class GestionEmployeeComponent implements AfterViewInit {
    constructor(
        private _liveAnnouncer: LiveAnnouncer,
        private fb: FormBuilder,
        private authService: AuthService,
        public dialog: MatDialog,
        private userService: UserService
    ) {}

    USER_DATA$!: MatTableDataSource<any>;
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    searchText = this.fb.nonNullable.control('');

    displayedColumns: string[] = [
        'matricule',
        'nom',
        'poste',
        'statut',
        'actions',
    ];
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
    isLoading: boolean = false;
    hide: boolean = true;
    employeeForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', Validators.required],
        address: ['', Validators.required],
        role: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        salary: ['', Validators.required],
        hours: this.fb.group({
            begin: ['', Validators.required],
            end: ['', Validators.required],
        }),
    });

    ngAfterViewInit(): void {
        this.userService.getAllUsers().subscribe((userList: any) => {
            this.USER_DATA$ = new MatTableDataSource(userList.users);
            this.USER_DATA$.paginator = this.paginator;
            this.USER_DATA$.sort = this.sort;
        });
    }

    announceSortChange(sortState: Sort) {
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }

    addUser() {
        if (this.employeeForm.errors) {
            console.log(this.employeeForm.value);
        } else {
            console.log(this.employeeForm.value);
            this.authService.signup(this.employeeForm.value).subscribe({
                next: (data) => {
                    this.isLoading = false;
                },
                error: (err) => {
                    this.isLoading = false;
                },
            });
        }
    }
    getErrorMessage() {}
    openDialog(userId: string) {
        this.userService.getUserById(userId).subscribe((data) => {
            const dialogRef = this.dialog.open(DialogComponent, {
                data: data,
                width: '600px',
            });
            dialogRef.afterClosed().subscribe(() => {
                this.userService.getAllUsers().subscribe((userList: any) => {
                    this.USER_DATA$ = new MatTableDataSource(userList.users);
                    this.USER_DATA$.paginator = this.paginator;
                    this.USER_DATA$.sort = this.sort;
                });
            });
        });
    }
    deleteUser(userId: string) {
        this.userService
            .deleteOneUser(userId)
            .pipe(concatMap(() => this.userService.getAllUsers()))
            .subscribe((userList: any) => {
                this.USER_DATA$ = new MatTableDataSource(userList.users);
                this.USER_DATA$.paginator = this.paginator;
                this.USER_DATA$.sort = this.sort;
            });
    }
    searchUser(event: any) {
        const newValue = event.target.value;
        this.userService.searchUser(newValue).subscribe((userList: any) => {
            this.USER_DATA$ = new MatTableDataSource(userList);
            this.USER_DATA$.paginator = this.paginator;
            this.USER_DATA$.sort = this.sort;
        });
    }
}
