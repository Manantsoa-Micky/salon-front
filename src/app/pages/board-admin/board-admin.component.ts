import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutService } from '../../_services/layout.service';
export interface Tile {
    color: string;
    cols: number;
    rows: number;
    text: string;
}

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
        MatGridListModule,
        MatSidenavModule,
    ],
})
export class BoardAdminComponent implements OnInit {
    constructor(public layoutService: LayoutService) {}
    tiles: Tile[] = [
        { text: 'One', cols: 4, rows: 1, color: 'lightblue' },
        { text: 'Two', cols: 1, rows: 1, color: 'lightgreen' },
        { text: 'Three', cols: 3, rows: 1, color: 'lightpink' },
    ];
    ngOnInit(): void {
        this.layoutService.setShowHeader(false);
        this.layoutService.setShowFooter(false);
    }
}
