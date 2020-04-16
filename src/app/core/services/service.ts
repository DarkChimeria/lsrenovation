import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()


export class Service {
    httpOptions = {
        headers: new HttpHeaders({
            'hostname': 'localhost',
            'port': '4200',
            'Content-Type': 'application/json',
            'authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFudCIsImlhdCI6MTU4Njc2NzMyNn0.fDyQnIpXq43jJZ5Vvt0KhLtPPF4QEucwti9ufMMrasw'
        })
    };

    UrlAPI = 'http://localhost:3000/';

    constructor(private http: HttpClient) { }
}
