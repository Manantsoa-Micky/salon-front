import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LayoutService } from '../../_services/layout.service';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
})
export class FooterComponent {
    constructor(public layoutService: LayoutService) {}
}
