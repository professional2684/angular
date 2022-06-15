import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CardDataService } from 'src/app/services/card-data.service'
import { CardFormat } from 'src/app/APIformat/cardformat';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards!: CardFormat[]

  // using public API
  /* 
  constructor(private route: Router, private cardlist: CardDataService) {
    this.cardlist.getCards().subscribe(carddata => {
      this.cards = carddata
    })
   }
  */

  // using local API
  constructor(private route: Router, private cardlist: CardDataService) {
    this.cardlist.getCardsLocal().subscribe(carddata => {
      this.cards = carddata
    })
   }

  ngOnInit(): void {
  }

  gotoDetail(val:  {id: number, name: string} ){
    this.route.navigate(
      ['/detail', val.id],
      //['/detail'], {queryParams: {id: '1'}}
      //{queryParams: {id: '1'}}
    )
  }

}
