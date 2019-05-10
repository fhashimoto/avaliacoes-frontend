import { Component } from '@angular/core';
import { legends } from '../names/nameslist';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  legends: Array<string> = [];

  // Na inicialização do Angular, o arquivo importado legends é atribuído a variável legends do excopo da classe listpage
  ngOnInit() {
    this.legends = legends;
  }
}
