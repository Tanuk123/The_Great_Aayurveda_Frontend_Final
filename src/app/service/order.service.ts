import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http:HttpClient) { }

  public addorder(order:any):Observable<any>{
    let api='http://localhost:8801/api/order/create'
    return this._http.post<any>(api,{order})
  }

  // public placeOrder(order:any):Observable<any>{
  //   let api='http://localhost:8801/api/order/razorpayorder'
  //   return this._http.post<any>(api,{})
  // }
  
}
