import {Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { throwError } from 'rxjs';
import {AppError} from '../common/errors/app-error';
import {NotFoundError} from '../common/errors/not-found-error';
import {BadInput} from '../common/errors/bad-input';
import {map} from 'rxjs/operators';

@Inject({
  providedIn: 'root'
})
export class DataService {
  constructor(@Inject(String) private url: string, private xhttp: HttpClient) {
    xhttp.get('assets/config/api.json').subscribe((apijson: any) => {
      this.url = apijson.origin + ':' + apijson.port + this.url;
    });
  }

  // ino test kon baadan
  getAll(): any {
    try {
      return this.xhttp.get(this.url)
        .pipe(map((response: any) => response.json()));
    } catch (e) {
      this.handleError(e);
    }
  }

  create(resource: string): any {
    try {
      return this.xhttp.post(this.url, JSON.parse(resource));
      // .pipe(map((response: any) => response.json()));
    } catch (e) {
      this.handleError(e);
    }
  }

  update(id: any, resource: object): any {
    try {
      return this.xhttp.patch(this.url + '/' + id, JSON.stringify(resource))
        .pipe(map((response: any) => response.json()));
      // this.http.patch(this.url, JSON.stringify(resource))
    } catch (e) {
      this.handleError(e);
    }
  }

  delete(id: any): any {
    try {
      return this.xhttp.delete(this.url + '/' + id)
        .pipe(map((response: any) => response.json()));
    } catch (e) {
      this.handleError(e);
    }
  }

  private handleError(error: Response): any{
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }
    if (error.status === 400) {
      return throwError(new BadInput(error.json()));
    }
    return throwError(new AppError());
  }
}
