import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { SplitterModule } from 'primeng/splitter';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { HeaderComponent } from '../components/header/header.component';
@Component({
  selector: 'app-board-admin',
  standalone: true,
  templateUrl: './board-admin.component.html',
  styleUrl: './board-admin.component.css',
  imports: [
    CalendarModule,
    AccordionModule,
    SplitterModule,
    SidebarModule,
    AvatarModule,
    CardModule,
    HeaderComponent,
  ],
})
export class BoardAdminComponent {
  constructor() {}
}
