import { Router } from '@angular/router';
import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
} from '@angular/common/http';
import { Inject, Injectable, inject, signal } from '@angular/core';
import { Observable, catchError, retry, tap, throwError } from 'rxjs';
import { AUTH_API } from '../constants/const';
import { StorageService } from './storage.service';
import { UserDTO } from '../_models/signup.model';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    // withCredentials: true,
};
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(
        private http: HttpClient,
        private storageService: StorageService
    ) {}
    authenticatedUser = signal(false);
    router = inject(Router);

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            console.error('An error occurred:', error.error);
        } else {
            console.error(
                `Backend returned code ${error.status}, body was: `,
                error.error
            );
        }
        return throwError(
            () => new Error('Something bad happened; please try again later.')
        );
    }

    signup(user: UserDTO): Observable<unknown> {
        return this.http
            .post(AUTH_API + 'signup', user, httpOptions)
            .pipe(retry(3), catchError(this.handleError));
    }

    login(data: any): Observable<unknown> {
        console.log('Login initiated');

        return this.http.post(AUTH_API + 'login', data, httpOptions).pipe(
            retry(3),
            catchError(this.handleError),
            tap((user: any) => {
                const extractedUser = {
                    userId: user.userId,
                    userRole: user.userRole,
                };
                this.storageService.saveUser(extractedUser);
                this.authenticatedUser.set(true);
                if (extractedUser.userRole === 'manager') {
                    console.log(extractedUser.userRole);

                    this.router.navigate(['admin']);
                }
            })
        );
    }
}
