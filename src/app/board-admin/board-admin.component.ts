import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { HeaderComponent } from '../components/header/header.component';
import { CardListComponent } from '../components/card-list/card-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-board-admin',
  standalone: true,
  templateUrl: './board-admin.component.html',
  styleUrl: './board-admin.component.css',
  imports: [
    CalendarModule,
    AccordionModule,
    AvatarModule,
    HeaderComponent,
    CardListComponent,
    RouterOutlet,
  ],
})
export class BoardAdminComponent {
  constructor() {}
}
