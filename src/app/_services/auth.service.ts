import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, retry, throwError } from 'rxjs';
import { AUTH_API } from '../constants/const';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}
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

    signup(user: unknown): Observable<unknown> {
        return this.http
            .post(AUTH_API + 'signup', user, httpOptions)
            .pipe(retry(3), catchError(this.handleError));
    }

    login(data: any): Observable<any> {
        return this.http
            .post(AUTH_API + 'login', data, httpOptions)
            .pipe(retry(3), catchError(this.handleError));
    }
}
