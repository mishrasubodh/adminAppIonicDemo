import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-love-calculator',
  templateUrl: './love-calculator.page.html',
  styleUrls: ['./love-calculator.page.scss'],
})
export class LoveCalculatorPage implements OnInit {
  user = [];
  ref = firebase.database().ref('lovecalcyData/');
  historydata = []
  constructor(
   public alertController:AlertController
  ) {
    this.ref.on('value', resp => {
      this.user = [];
      this.user =this.snapshotToArray(resp);
   })
   console.log(this.user,"this.user");

  }

 
    async delete(key) {
      const alert = await this.alertController.create({
        header: 'Confirm!',
        message: 'Are you sure want to delete this info?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('cancel');
            }
          }, {
            text: 'Okay',
            handler: () => {
              firebase.database().ref('lovecalcyData/'+key).remove();
            }
          }
        ]
      });
    
      await alert.present();
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

  snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};
}
