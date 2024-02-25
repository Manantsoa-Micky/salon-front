import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

export type MenuItem = {
    icon: string;
    label: string;
    route: string;
};
@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [
        RouterModule,
        MatListModule,
        MatIconModule,
        MatAccordion,
        MatExpansionModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        CommonModule,
    ],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
    link: string = 'this is a link';
    showInfo(link: string) {
        console.log(link);
    }
    menuItems = signal<MenuItem[]>([
        {
            icon: 'dashboard',
            label: 'Employés',
            route: 'list',
        },
        {
            icon: 'dashboard',
            label: 'Clients',
            route: 'add-employee',
        },
        {
            icon: 'dashboard',
            label: 'Offres',
            route: 'leave',
        },
        {
            icon: 'dashboard',
            label: 'Statistiques',
            route: 'leave',
        },
    ]);
}
