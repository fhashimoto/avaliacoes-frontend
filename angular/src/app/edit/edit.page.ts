import { Component } from '@angular/core';
import { legends } from '../names/nameslist';

@Component({
  selector: 'app-edit',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss']
})
export class EditPage {
  legends: string[][];
  nameInput: string;

  constructor() {
    
  }

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
  }

  onChange(e){
    // O nome editado é salvo na variável nameInput
    this.nameInput = e.target.value;
  }
}


