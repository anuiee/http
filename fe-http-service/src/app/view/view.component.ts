import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { JsonserviceService } from '../jsonservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  providers:[JsonserviceService],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {
public jsonData :any;
public jsonDatabyId :any;

  // data :any;
  constructor(private jsonplaceholder:JsonserviceService){
    // this.data=new Array<any>()
  }
  getDataFromAPI(){
      this.jsonplaceholder.getData().subscribe((result2)=>{
      console.log('view',result2);
      this.jsonData=result2;
      
    })
  }


  getDataById(data2: any){
    this.jsonplaceholder.viewUserbyId(data2).subscribe((result)=>{
      // console.log('id',result);
      this.jsonDatabyId=result;
      console.log(this.jsonDatabyId);
      
     
    })
  }
  delete(index:number){
    this.jsonplaceholder.deletePost(index).subscribe((res: any)=>{
      // console.log('id',result);
      console.log(res);
      this.jsonData.splice(index,1)
      // this.res.splice(index,1);
      
     
    });
    
  }
  

}
