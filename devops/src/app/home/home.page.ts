import { Component } from '@angular/core';
// Arrumando typo de import
import { LoadingController } from '@ionic/angular';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loading;
  photos: Array<string> = [];

  constructor(
    public loadingController: LoadingController
  ) {

  }

  ngOnInit() {
    // Desnecessário
    // this.printOnConsole();
    this.presentLoading();
    this.randomPhotos();

    setTimeout( () => {
      try {
        // Adicionado o this. pois a função está no escopo da classe
        this.dismissLoading();
      } catch(err) {
        alert('Error dismissing loader');
      }
      
    }, 5000)
    
  }

  randomPhotos() {
    let i = 0;
    while (i < 501) {
      let salt = Math.floor((Math.random() * 300) + 1);
      this.photos.push(`https://picsum.photos/200/200?image=${salt}`)
      i = i + 1;
    }
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      spinner: 'dots',
      message: 'Please wait...',
      duration: 3000
    });
    return await this.loading.present();
  }

  // Função desnecessária chamada apenas para logar
  // printOnConsole() {
  //   console.log('Running a public function on init');
  // }

  dismissLoading() {
    if (!_.isNil(this.loading)) {
      this.loading.dismiss();
    }
  }
  trackByFn(index,photo){
    return index;
  }
}
