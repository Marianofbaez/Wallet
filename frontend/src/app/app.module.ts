import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LandingComponent } from './pages/landing/landing.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    LandingComponent,
    WhoWeAreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // es un servicio que nos provee Angular
  ],
  providers: [], //acá van los servicios
  bootstrap: [AppComponent] // esto no se refiere al framework bootstrap, sino a qué componente va a ser el principal
})
export class AppModule { }
