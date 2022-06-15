import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardDetailFormat } from 'src/app/APIformat/carddetailformat';
import { CardDataService } from 'src/app/services/card-data.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private carddetail: CardDataService) {}
  cardId!: number
  
  // using public API
  /*

  cardDetails!: CardDetailFormat[]

  ngOnInit(): void {
    //this.cardId = this.route.snapshot.paramMap.get('id')
    this.route.params.subscribe(paramId => this.cardId = paramId['id'])
    
    this.carddetail.getCardById(this.cardId).subscribe(details =>{
      this.cardDetails = details
    })
  }
  */

  // using local API

  cardDetails!: CardDetailFormat
  ngOnInit(): void {
    //this.cardId = this.route.snapshot.paramMap.get('id')
    this.route.params.subscribe(paramId => this.cardId = paramId['id'])
    
    this.carddetail.getCardByIdLocal(this.cardId).subscribe(details =>{
      this.cardDetails = details
    })
  }
 
  filterCard(details : CardDetailFormat){
    return details.id == this.cardId
  }


}
