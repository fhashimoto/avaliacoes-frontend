import { Component } from '@angular/core';
import { legends } from '../names/nameslist';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {
  searchInput : string;
  results = [];
  legends: Array<string> = [];

  ngOnInit() {
    this.legends = legends;
  }

  onSearch() {
    // Se possuir conteúdo no Search, busca o resultado, transformando tudo em lowercase
    // Se não possui input, ele esvazia o results
    if(this.searchInput.length > 0) {
      this.results = legends.filter( name => {
        return name.toLowerCase().includes(this.searchInput.toLowerCase())
      });
    } else {
      this.results = [];
    }
  }
}
