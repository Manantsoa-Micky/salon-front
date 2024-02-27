import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../footer/footer.component';
type User = {
    name: String;
    age: Number;
};
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, HeaderComponent, FooterComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
    user$!: Observable<User>;
    constructor(private userService: UserService) {}
    ngOnInit(): void {
        // this.user$ = this.userService.getUsers();
    }
}
