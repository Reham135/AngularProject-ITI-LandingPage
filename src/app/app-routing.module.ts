import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { UserComponent } from './Components/user/user.component';
import { PhotoComponent } from './Components/photo/photo.component';

const routes: Routes = [{path:"",component:LandingPageComponent},
{path:"users",component:LandingPageComponent},
{path:"users/:id",component:UserComponent},
{path:"users/:id/albums/:albumId",component:PhotoComponent},
{path:"users/:id/albums",component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
