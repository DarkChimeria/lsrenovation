import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://vps816559.ovh.net:3000/';
import { Invoice } from '../entities/invoice';
import { Customer } from '../customer/customer';
import { Unit } from '../entities/unit';

@Injectable()
// const options = {
//   hostname: 'localhost',
//   port: 8888,
//   path: '/getLastIdOrder',
//   method: 'Get'
// }

export class InvoiceService {
  httpOptions = {
    headers: new HttpHeaders({
      'hostname': 'localhost',
      'port': '4200',
      'Content-Type': 'application/json',
      'authentication': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFudCIsImlhdCI6MTU3MTI0NTA4OX0.MPO6Mr8KApHt5j6c8jVb8Q947m5zH_HUnZAhej4YcKc'
    })
  };
  constructor(private http: HttpClient) { }

  getCarsSmall() {
    return this.http.get<any>('../../assets/json/cars-small.json')
      .toPromise()
      .then(res => <Invoice[]>res.data)
      .then(data => data);
  }

  getAllCustomer() {
    return this.http.get<any>(API + 'customer', this.httpOptions)
      .toPromise()
      .then(res => <Customer[]>res)
      .then(data => data);
  }
  getAllTypeOfQuantity() {
    return this.http.get<any>(API + 'invoice/typeofquantity', this.httpOptions)
      .toPromise()
      .then(res => <Unit[]>res)
      .then(data => data);
  }
  saveInvoice(invoice: Invoice) {
    const body = JSON.stringify({
      invoice: invoice
    });
    return this.http.post<any>(API + 'invoice/save', body, this.httpOptions)
      .toPromise()
      .then(res => <Invoice>res)
      .then(data => data);
  }
  getCarsMedium() {
    return this.http.get<any>('../../assets/json/cars-medium.json')
      .toPromise()
      .then(res => <Invoice[]>res.data)
      .then(data => data);
  }

  getCarsLarge() {
    return this.http.get<any>('../../assets/json/cars-large.json')
      .toPromise()
      .then(res => <Invoice[]>res.data)
      .then(data => data);
  }

  getCarsHuge() {
    return this.http.get<any>('../../assets/json/cars-huge.json')
      .toPromise()
      .then(res => <Invoice[]>res.data)
      .then(data => data);
  }
}
