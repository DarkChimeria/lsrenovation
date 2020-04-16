import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const API = 'http://localhost:3000/';
import { Customer } from './customer';

@Injectable()
// const options = {
//   hostname: 'localhost',
//   port: 8888,
//   path: '/getLastIdOrder',
//   method: 'Get'
// }

export class CustomerService {
  httpOptions = {
    headers: new HttpHeaders({
      'hostname': 'localhost',
      'port': '4200',
      'Content-Type': 'application/json',
      'authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYW50IiwiaWF0IjoxNTg2Nzc0OTYzLCJleHAiOjE1ODY3Nzg1NjN9.0as6r7r2fcTjxMmhiCoyby7MvFzY7QWDqJiQh4q_S-A'
    })
  };
  constructor(private http: HttpClient) { }

  getCarsSmall() {
    return this.http.get<any>('../../assets/json/cars-small.json')
      .toPromise()
      .then(res => <Customer[]>res.data)
      .then(data => data);
  }

  getAllCustomer() {
    return this.http.get<any>(API + 'customer', this.httpOptions)
      .toPromise()
      .then(res => <Customer[]>res)
      .then(data => data);
  }

  getCarsMedium() {
    return this.http.get<any>('../../assets/json/cars-medium.json')
      .toPromise()
      .then(res => <Customer[]>res.data)
      .then(data => data);
  }

  getCarsLarge() {
    return this.http.get<any>('../../assets/json/cars-large.json')
      .toPromise()
      .then(res => <Customer[]>res.data)
      .then(data => data);
  }

  getCarsHuge() {
    return this.http.get<any>('../../assets/json/cars-huge.json')
      .toPromise()
      .then(res => <Customer[]>res.data)
      .then(data => data);
  }
}
