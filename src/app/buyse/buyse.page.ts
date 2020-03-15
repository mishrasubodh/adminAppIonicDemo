import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyse',
  templateUrl: './buyse.page.html',
  styleUrls: ['./buyse.page.scss'],
})
export class BuysePage implements OnInit {

  buyseldata=[
  {id:1,name:'subodh',city:"mailani",distcrict:"noida",number:1234567878,grain:"wheat",rate:5},
  {id:2,name:'subodh',city:"mailani",distcrict:"noida",number:1234567878,grain:"wheat",rate:5},
  {id:3,name:'subodh',city:"mailani",distcrict:"noida",number:1234567878,grain:"wheat",rate:5},
  {id:4,name:'subodh',city:"mailani",distcrict:"noida",number:1234567878,grain:"wheat",rate:5},
  {id:5,name:'subodh',city:"mailani",distcrict:"noida",number:1234567878,grain:"wheat",rate:5},
  {id:6,name:'subodh',city:"mailani",distcrict:"noida",number:1234567878,grain:"wheat",rate:5},
  {id:7,name:'subodh',city:"mailani",distcrict:"noida",number:1234567878,grain:"wheat",rate:5},
  {id:8,name:'subodh',city:"mailani",distcrict:"noida",number:1234567878,grain:"wheat",rate:5},
  {id:9,name:'subodh',city:"mailani",distcrict:"noida",number:1234567878,grain:"wheat",rate:5},
  {id:10,name:'subodh',city:"mailani",distcrict:"noida",number:1234567878,grain:"wheat",rate:5},
  {id:11,name:'subodh',city:"mailani",distcrict:"noida",number:1234567878,grain:"wheat",rate:5},
  {id:12,name:'subodh',city:"mailani",distcrict:"noida",number:1234567878,grain:"wheat",rate:5},
  {id:13,name:'subodh',city:"mailani",distcrict:"noida",number:1234567878,grain:"wheat",rate:5},
  {id:14,name:'subodh',city:"mailani",distcrict:"noida",number:1234567878,grain:"wheat",rate:5},
  {id:15,name:'subodh',city:"mailani",distcrict:"noida",number:1234567878,grain:"wheat",rate:5},]
  constructor() { 
    console.log(this.buyseldata)
  }

  ngOnInit() {
  }

}
