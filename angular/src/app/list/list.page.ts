import { Component } from '@angular/core';
import { legends } from '../names/nameslist';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  constructor(public events1 : Events){
    this.events1.subscribe('lista',(data)=>{
      this.legends = data;
    })
  }
  // Na inicialização do Angular, o arquivo importado legends é atribuído a variável legends do escopo da classe listpage
  legends: Array<string> = [];

  ngOnInit(){
    this.legends = legends;
  }

}
