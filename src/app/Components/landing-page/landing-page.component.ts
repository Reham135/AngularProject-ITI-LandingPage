
import { Component } from '@angular/core';
import { MyserviceService } from 'src/app/Services/myservice.service';
import { FormsModule } from '@angular/forms';
import { __values } from 'tslib';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  users: any;
  userId: any;
  val: any;
  u: any;
  id: any;
  FormContext: any;
  email: any;
  phone: any;
  street: any;
  suite: any;
  city: any;
  name: any;
  isValid: boolean = false;

  constructor(private myService: MyserviceService) {
    myService.GetAllUsers().subscribe((data) => { this.users = data }, (error) => { console.log(error) })


  }

  confirmDelete(button: any) {
    if (confirm("Are you sure you want to delete this user?")) {

      this.myService.confirmDelete(button).subscribe();
      this.myService.GetAllUsers().subscribe((data) => { this.users = data }, (error) => { console.log(error) })
    }
  }








  openPopup(context: string, user?: any) {
    this.FormContext = context;
    if (context === 'edit' && user) {
      this.name = user.name;
      this.email = user.email;
      this.phone = user.phone;
      this.street = user.address.street;
      this.suite = user.address.suite;
      this.city = user.address.city;
      this.id = user.id;
    } else {
      this.name = null;
      this.email = null;
      this.phone = null;
      this.street = null;
      this.suite = null;
      this.city = null;
      this.id = null;
    }
    console.log(user);

  }

  Save(event: Event, FormContext: any, name: any, email: any, phone: any, street: any, suite: any, city: any) {
    console.log(FormContext);
    if (FormContext === 'ADD') {
      this.add(name, email, phone, street, suite, city);
    } else if (FormContext === 'edit') {
      this.update(name, email, phone, street, suite, city);
    }
    console.log(email, name, city, suite, phone)
  }
  add(name: any, email: any, phone: any, street: any, suite: any, city: any) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name && emailRegex.test(email) && phone && street && suite && city) {
      let newUser = { name, email, phone, address: { street, suite, city } };
      this.myService.AddUser(newUser).subscribe();
      this.myService.GetAllUsers().subscribe((data) => { this.users = data }, (error) => { console.log(error) })
      this.isValid = true;

    } else {
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
      } else {
        alert("Please fill all fields.");
      } this.isValid = false;

    }

  }
  update(name: any, email: any, phone: any, street: any, suite: any, city: any) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name && emailRegex.test(email) && phone && street && suite && city) {
      let updatedData = { name, email, phone, address: { street, suite, city } };
      this.myService.updateData(this.id, updatedData).subscribe();
      this.isValid = true;
      this.myService.GetAllUsers().subscribe((data) => { this.users = data }, (error) => { console.log(error) })

    }
    else {
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
      }
      else {
        alert("Please fill all fields.");
      } this.isValid = false;


    }

  }



}
