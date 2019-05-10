import { Component, SimpleChanges, Input } from '@angular/core';
import {EditPage} from '../edit/edit.page';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
  providers: [EditPage]
})
export class ListPage {
  // Na inicialização do Angular, o arquivo importado legends é atribuído a variável legends do escopo da classe listpage

  constructor(private editpage : EditPage){}
  public legends: Array<string> = [];

  ngOnInit(){
    this.editpage.atual.subscribe(legendsNew => this.legends = legendsNew);
    console.log(this.legends);
  }

}
