import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private base = "/assets"
  constructor(private http: HttpClient) { }
  public Get<T>(url: string){
    return this.http.get<T>(`${this.base}${url}`)
  }
}
