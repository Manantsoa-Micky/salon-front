import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { USER_API } from '../constants/const';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
    providedIn: 'root',
})
export class UserService {
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

    getAllUsers(): Observable<unknown> {
        return this.http
            .get(USER_API + 'allUsers')
            .pipe(retry(3), catchError(this.handleError));
    }
    getUserById(userId: string): Observable<unknown> {
        return this.http.get(`${USER_API}/get/${userId}`);
    }
    deleteOneUser(userId: string): Observable<unknown> {
        return this.http.get(`${USER_API}/delete/${userId}`);
    }

    updateUser(data: unknown): Observable<unknown> {
        return this.http.post(USER_API + 'update', data, httpOptions);
    }

    searchUser(query: string): Observable<unknown> {
        return this.http.get(`${USER_API}/search?q=${query}`);
    }
}
