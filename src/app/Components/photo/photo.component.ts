
  import { Component} from '@angular/core';
  import { MyserviceService } from 'src/app/Services/myservice.service';
  import { ActivatedRoute } from '@angular/router';
  
  @Component({
    selector: 'app-photo',
    templateUrl: './photo.component.html',
    styleUrls: ['./photo.component.css']
  })
  
  export class PhotoComponent  {
    ID:any;
    user:any;
    photos:any;
    constructor(myRoute:ActivatedRoute,public myService:MyserviceService ){ 
      this.ID=myRoute.snapshot.params["id"];
      
      myService.GetPhotos(this.ID).subscribe((data) => { this.photos = data }, (error) => { console.log(error) })
      this.myService.GetUserById(this.ID).subscribe(
        {
          next:(data)=>{this.user=data},
          error:(error)=>{console.log(error)}
        }    
        )
    }
    
    }