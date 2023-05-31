import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private readonly myClient:HttpClient) { }
  private readonly Base_URL ="http://localhost:3000";
  GetAllUsers(){
   return this.myClient.get(this.Base_URL+"/users");
  }
  GetUserById(id:any){
   return this.myClient.get(this.Base_URL+"/users/"+id); 
  }
AddUser(newUser:any){
  return this.myClient.post(this.Base_URL+"/users",newUser);
}
 confirmDelete(id:any){
     return this.myClient.delete(this.Base_URL+"/users/"+id);
     
  }
  
  public pic_URL ="https://jsonplaceholder.typicode.com";
   GetAllAlbums(userId:any){
    return this.myClient.get(this.pic_URL+"/users/"+userId+"/albums");
   } 
   GetAlbumById(userId:any,albumId:any){
    return this.myClient.get(this.pic_URL+"/users/"+userId+"/albums/"+albumId); 
   }

   GetPhotos(albumId:any){
    return this.myClient.get(this.pic_URL+"/photos?albumId="+albumId); 
   }
   
 /*  getData(data:any) {
    return this.myClient.get(this.Base_URL+"/"+data);
  }
  
    */
  
  updateData(id:number,newData: any){
    return this.myClient.put(this.Base_URL+'/users/'+id,newData);
  }
  
}

