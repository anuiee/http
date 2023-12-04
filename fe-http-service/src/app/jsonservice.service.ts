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
 updatePost(){
  console.log();
  const putBody = {
    title: 'foo',
    body: 'bar',
    userId: 1
    
  };
  return this.http.put('https://jsonplaceholder.typicode.com/posts/1',putBody);
}
patchData(){
  console.log();
  const putBody = {
    title: 'HEY THERE',
  };
  return this.http.patch('https://jsonplaceholder.typicode.com/posts/1',putBody);
}
deletePost(id : number): Observable<number>{
  console.log('deleted',id);
  //  this.http.delete<any>(this.url + id).splice(id,1);
   return this.http.delete<any>(this.url + id);
   
}

}
