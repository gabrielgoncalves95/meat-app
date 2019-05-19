import {Restaurant} from './restaurant/restaurant.model';
import {MEAT_API} from '../app.api';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PATH} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class RestaurantsService {
  constructor(private http: HttpClient) {
  }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${MEAT_API}${PATH.restaurants}/all`);
  }
}
