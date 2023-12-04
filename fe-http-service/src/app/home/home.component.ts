import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { JsonserviceService } from '../jsonservice.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,HttpClientModule,FormsModule],
  providers:[JsonserviceService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  data :Array<any>
  public currentStatus!: string;
  constructor(private jsonplaceholder:JsonserviceService){
    this.data=new Array<any>()
  }
  ngOnInit():void{
    this.jsonplaceholder.updatePost();
  }
  updatePost(){
    this.jsonplaceholder.updatePost().subscribe(putdata =>{
      console.log('Update',putdata);
      
    })
  }
  patchPost(){
    this.jsonplaceholder.patchData().subscribe(putdata =>{
      console.log('Patch',putdata);
      
    })
  }
  getDataFromAPI(){
    this.jsonplaceholder.getData().subscribe((data)=>{
      console.log(data);
      
    })
  }
  getUserData(data: any){
    console.log('data',data);
    this.jsonplaceholder.saveUser(data).subscribe((result)=>{
      console.log('result',result.status);
      if(result.status >=300 ){
        console.log('error');
        this.currentStatus='Failed';
        console.log('cs',this.currentStatus);
        
        
        
      }
      else{
        console.log('success');
        this.currentStatus='sussess';
        console.log('cs',this.currentStatus);
        
      }
      
      
      
    },
    (error) => {
      console.log(error);
      // get the status as error.status
   }
    )
    
    
  }
}
