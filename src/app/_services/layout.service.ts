import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    private showHeader = true;
    private showFooter = true;

    constructor() {}

    setShowHeader(show: boolean): void {
        this.showHeader = show;
    }

    setShowFooter(show: boolean): void {
        this.showFooter = show;
    }

    getShowHeader(): boolean {
        return this.showHeader;
    }

    getShowFooter(): boolean {
        return this.showFooter;
    }
}
