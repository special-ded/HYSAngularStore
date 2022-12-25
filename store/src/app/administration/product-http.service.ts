import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService implements OnInit {
  URL = 'https://hys-fe-course-api.vercel.app/products'
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.URL).subscribe(data => console.log(data)
    )
  }
}
