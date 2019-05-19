import {throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

export class ErrorHandler {
  static  handleError(error: HttpErrorResponse | any) {
    let errorMessage: string;
    if (error instanceof  HttpErrorResponse) {
      errorMessage = `Error ${error.status} on getting data from URL ${error.url} - ${error.statusText}`;
    } else {
      errorMessage = error.toString();
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
