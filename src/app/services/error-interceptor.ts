import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(error => {
                if (error instanceof HttpErrorResponse) {
                    if(error.status === 401){
                        return throwError(error.statusText);
                    }
                    const applicationError = error.headers.get('Application-Error');
                    if (applicationError) {
                        console.log(applicationError);
                        return throwError(applicationError);
                    }
                    const serverError = error.error;
                    let modalStateErrors = '';
                    if(serverError && typeof serverError == 'object'){
                        for(const key in serverError){
                            if(serverError[key]){
                                modalStateErrors += serverError[key] + '\n'
                            }
                        }
                    }
                    return throwError(modalStateErrors || serverError || 'Server Error');
                }
                return throwError(error); // Handle non-HttpErrorResponse errors
            })
        );
    }
}

export const ErrorInterceptorProvide = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};
