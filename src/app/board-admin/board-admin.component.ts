import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { CardListComponent } from '../components/card-list/card-list.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@Component({
    selector: 'app-board-admin',
    standalone: true,
    templateUrl: './board-admin.component.html',
    styleUrl: './board-admin.component.css',
    imports: [
        HeaderComponent,
        CardListComponent,
        RouterOutlet,
        SidebarComponent,
    ],
})
export class BoardAdminComponent {
    constructor() {}
}
