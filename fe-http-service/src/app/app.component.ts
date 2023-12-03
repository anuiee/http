import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { JsonserviceService } from './jsonservice.service';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterOutlet,HttpClientModule,FormsModule,ViewComponent,HomeComponent],
  providers:[JsonserviceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fe-http-service';
  // // public currentStatus : string ;
  // data :Array<any>
  // public currentStatus!: string;
  // constructor(private jsonplaceholder:JsonserviceService){
  //   this.data=new Array<any>()
  // }
  // getDataFromAPI(){
  //   this.jsonplaceholder.getData().subscribe((data)=>{
  //     console.log(data);
      
  //   })
  // }
  // getUserData(data: any){
  //   console.log('data',data);
  //   this.jsonplaceholder.saveUser(data).subscribe((result)=>{
  //     console.log('result',result.status);
  //     if(result.status >=300 ){
  //       console.log('error');
  //       this.currentStatus='Failed';
  //       console.log('cs',this.currentStatus);
        
        
        
  //     }
  //     else{
  //       console.log('success');
  //       this.currentStatus='sussess';
  //       console.log('cs',this.currentStatus);
        
  //     }
      
      
      
  //   },
  //   (error) => {
  //     console.log(error);
  //     // get the status as error.status
  //  }
  //   )
    
    
  //}

  //  getUserData(data: any){
  //      console.log(data);
      
      
  //    }
}
