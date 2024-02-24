import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-card-list',
    standalone: true,
    templateUrl: './card-list.component.html',
    styleUrl: './card-list.component.css',
    imports: [CardComponent, NgFor],
})
export class CardListComponent {
    userList = [
        { name: 'Rakoto', role: 'Manager' },
        { name: 'Randria', role: 'Manager' },
        { name: 'Razafy', role: 'Manager' },
        { name: 'Razosy', role: 'Manager' },
        { name: 'Rahary', role: 'Manager' },
        { name: 'Manantsoa', role: 'Manager' },
        { name: 'Manantsoa', role: 'Manager' },
        { name: 'Manantsoa', role: 'Manager' },
        { name: 'Manantsoa', role: 'Manager' },
        { name: 'Manantsoa', role: 'Manager' },
        { name: 'Manantsoa', role: 'Manager' },
        { name: 'Manantsoa', role: 'Manager' },
        { name: 'Manantsoa', role: 'Manager' },
        { name: 'Manantsoa', role: 'Manager' },
    ];
}
