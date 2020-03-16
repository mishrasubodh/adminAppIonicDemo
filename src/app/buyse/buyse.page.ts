import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-buyse',
  templateUrl: './buyse.page.html',
  styleUrls: ['./buyse.page.scss'],
})
export class BuysePage implements OnInit {
  user = [];
  ref = firebase.database().ref('user/');
  constructor(
   public alertController: AlertController
  ) { 
    this.ref.on('value', resp => {
      this.user = [];
      this.user =this.snapshotToArray(resp);
   })
   console.log(this.user,"this.user buysel");
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
            firebase.database().ref('user/'+key).remove();
          }
        }
      ]
    });
  
    await alert.present();
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
  ngOnInit() {
  }

}
