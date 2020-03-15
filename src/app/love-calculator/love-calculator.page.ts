import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-love-calculator',
  templateUrl: './love-calculator.page.html',
  styleUrls: ['./love-calculator.page.scss'],
})
export class LoveCalculatorPage implements OnInit {
  userdata: [];
  historydata = []
  constructor() {
    this.userdata = JSON.parse(localStorage.getItem('session'));
    console.log(this.userdata, "this.userdata")

  }

  deletedata(curentdata) {
    console.log(curentdata)
    let forremoveData = this.historydata.splice(curentdata, 1)
    console.log('forremoveData', forremoveData)
    localStorage.removeItem('session')
    console.log('historydata', this.historydata)
    this.SaveDataToLocalStorage(this.historydata)
  }
  ngOnInit() {
  }
  SaveDataToLocalStorage(data) {
    console.log(data)
    if (data.length !== 0) {
      var c = [];
      c = JSON.parse(localStorage.getItem('session')) || [];
      var a = [...data, ...c];
      console.log('a', a)
      localStorage.setItem('session', JSON.stringify(a));

    }
  }
}
