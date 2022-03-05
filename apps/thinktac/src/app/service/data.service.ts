import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  isClick = new Subject<boolean>();
  api = "https://gist.githubusercontent.com/manzooralam/4b6aca6e1aa794c57c0cb6e7a2605109/raw/694828a0b1084ef63ff507ed85de3db6e3931e99/list.json";
  constructor(private http : HttpClient) { }

   getdata():Observable<any>{
    return this.http.get<any>(`${this.api}`);
  }
}
