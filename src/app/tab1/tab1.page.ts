import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = "Grocery List"
items = [
  {
    name: "Milk",
    quantity: 2
  },
  {
    name: "Bread",
    quantity: 3
  },  
  {
    name: "Pear",
    quantity: 2
  },  
  {
    name: "Cheese",
    quantity: 2
  },
]

  constructor(public toastController: ToastController, public alertController: AlertController) {}
  async removeItem(item, index) {
    console.log("Removing Item - ", item, index);
    const toast = await this.toastController.create({
      message: 'Removing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();
    this.items.splice(index, 1);
  }

  addItem() {
    this.presentAlertaddItem();
  }

  async presentAlertaddItem() {
    const alert = await this.alertController.create({
     
      header: 'Please enter item...',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          type: 'text',
          id: 'name2-id',
          placeholder: 'Quantity'
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.items.push(item);
          }
        }
      ]
    });

    await alert.present();
  }
  
}
