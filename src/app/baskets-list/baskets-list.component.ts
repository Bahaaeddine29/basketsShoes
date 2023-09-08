import { iBaskets } from '../iBaskets';
import { BasketService } from './../basket.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-baskets-list',
  templateUrl: './baskets-list.component.html',
  styleUrls: ['./baskets-list.component.css']
})
export class BasketsListComponent {

  baskets: [] = []; 


  constructor (private BasketService: BasketService) { 

    }


    // getBasket () {
    //   this.baskets=this.BasketService.fetchAll();
    //   return this.baskets; 
    // }


}
