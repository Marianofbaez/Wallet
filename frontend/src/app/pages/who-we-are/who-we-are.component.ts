import { Component, OnInit } from '@angular/core';
import { WhoWeAreService } from 'src/app/services/who-we-are.service';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.css']
})
export class WhoWeAreComponent implements OnInit {

  team:any;
  showTitle:boolean=true;
  constructor(private myService:WhoWeAreService) { }

  ngOnInit(): void {
    this.myService.getWhoWeAre().subscribe(data =>{ // al ser asincrónico, hay que suscribirse para que cuando el servicio tenga una respuesta me avise
      console.log(data);
      this.team=data;
    })
  }

}
