import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from '../../footer/footer.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterOutlet, MatToolbarModule, FooterComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {
    constructor() {}

    onSubmit(): void {}
}
