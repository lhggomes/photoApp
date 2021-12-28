import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http//localhost:3000';

@Injectable()
export class PhotoService {

  constructor(private http: HttpClient) { }

  listFromUser(username : string) {
    return this.http
    .get<Object[]>(API + '/' + username + '/' +'photos')

  }

}
