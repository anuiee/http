import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonserviceService {

  constructor(private http:HttpClient) { }
  url = "https://jsonplaceholder.typicode.com/posts/";
  getData(): Observable<any>{
    
      return this.http.get<any>(this.url);
   }
   users()
   {
    return this.http.get(this.url);
   }
   saveUser(data: any){
    console.log('saving',this.http.post<any>(this.url,data));
    return this.http.post<any>(this.url,data,{observe: 'response'});
    // observe : 'data';
    
    
   }

   viewUserbyId(data2: any): Observable<any>{
    console.log('data2',data2);
    
    return this.http.get<any>(this.url+data2);
 }
}
