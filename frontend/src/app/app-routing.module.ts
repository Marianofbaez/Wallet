import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';

const routes: Routes = [
  {path: 'home', component:LandingComponent},
  {path: 'who-we-are', component:WhoWeAreComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
