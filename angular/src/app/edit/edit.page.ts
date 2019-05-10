import { Component } from '@angular/core';
import { legends } from '../names/nameslist';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss']
})
export class EditPage {
  legends: string[][];
  nameInput: string;
  public legendsNew: Array<string> = legends;

  public origem = new BehaviorSubject(this.legendsNew);
  atual = this.origem.asObservable();

  constructor() {}

  ngOnInit(){
    // Criando um novo array com o  conteúdo do botão "linkado" com cada nome
    this.legends = legends.map(value=> [value,'edit']);
  }

  onEdit(item) {
    // Toggle de string
    item[1] = (item[1]=='edit') ? 'save' : 'edit';
    // Quando clicar Save e voltar para edit, o nome é salvo
    if (item[1]==='edit' && this.nameInput){
      item[0] = this.nameInput;
    }
    this.legendsNew = this.legends.map(val=>val[0]);

    this.origem.next(this.legendsNew);    
  }

  onChange(e){
    // O nome editado é salvo na variável nameInput
    this.nameInput = e.target.value;
  }
}


