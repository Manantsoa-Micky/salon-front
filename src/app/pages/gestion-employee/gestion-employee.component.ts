import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';

export interface EmployeeData {
    matricule: string;
    nom: string;
    poste: string;
    statut: string;
}

const ELEMENT_DATA: EmployeeData[] = [
    {
        matricule: 'Mat-0001',
        nom: 'Randria koto',
        poste: 'Manager',
        statut: 'Actif',
    },
    {
        matricule: 'Mat-0001',
        nom: 'Randria koto',
        poste: 'Manager',
        statut: 'Actif',
    },
    {
        matricule: 'Mat-0001',
        nom: 'Randria koto',
        poste: 'Manager',
        statut: 'Actif',
    },
    {
        matricule: 'Mat-0001',
        nom: 'Randria koto',
        poste: 'Manager',
        statut: 'Actif',
    },
    {
        matricule: 'Mat-0001',
        nom: 'Randria koto',
        poste: 'Manager',
        statut: 'Actif',
    },
    {
        matricule: 'Mat-0001',
        nom: 'Randria koto',
        poste: 'Manager',
        statut: 'Actif',
    },
];

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
    ],
    templateUrl: './gestion-employee.component.html',
    styleUrl: './gestion-employee.component.css',
})
export class GestionEmployeeComponent implements AfterViewInit {
    constructor(
        private _liveAnnouncer: LiveAnnouncer,
        private fb: FormBuilder,
        private authService: AuthService
    ) {}

    displayedColumns: string[] = ['matricule', 'nom', 'poste', 'statut'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    @ViewChild(MatSort)
    sort!: MatSort;
    @ViewChild(MatPaginator)
    paginator!: MatPaginator;
    isLoading: boolean = false;
    hide: boolean = true;
    employeeForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', Validators.required],
        adress: ['', Validators.required],
        role: ['', Validators.required],
        phone: ['', Validators.required],
        salary: ['', Validators.required],
        hours: this.fb.group({
            begin: ['', Validators.required],
            end: ['', Validators.required],
        }),
    });

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    announceSortChange(sortState: Sort) {
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }

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
    getErrorMessage() {}
}
