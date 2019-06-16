import {Restaurant} from './restaurant/restaurant.model';
import {MEAT_API} from '../app.api';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PATH} from '../../environments/environment';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ErrorHandler} from '../app.error-handler';

@Injectable()
export class RestaurantsService {
  constructor(private http: HttpClient) {
  }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${MEAT_API}${PATH.restaurants}/all`)
      .pipe(catchError(ErrorHandler.handleError));
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}${PATH.restaurants}/${id}`)
      .pipe(catchError(ErrorHandler.handleError));
  }

}
