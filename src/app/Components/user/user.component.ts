import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from 'src/app/Services/myservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  ID:any;
  user:any;
  albums:any;
constructor(myRoute:ActivatedRoute,public myService:MyserviceService ){
  this.ID=myRoute.snapshot.params["id"];
  myService.GetAllAlbums(this.ID).subscribe((data) => { this.albums = data }, (error) => { console.log(error) })
  this.myService.GetUserById(this.ID).subscribe(
    {
      next:(data)=>{this.user=data},
      error:(error)=>{console.log(error)}
    
    }
    
    )}
    

}

  