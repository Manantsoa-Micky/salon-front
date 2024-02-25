import { Component } from '@angular/core';

@Component({
    selector: 'app-employee-table',
    standalone: true,
    imports: [],
    templateUrl: './employee-table.component.html',
    // styleUrl: './employee-table.component.css',
})
export class EmployeeTableComponent {
    products = [
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5,
        },
    ];
}
