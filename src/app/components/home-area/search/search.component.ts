import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

    public tooltip = Math.random() < 0.5 ? "Search something..." : "Search website...";

    public textToSearch: string;

    public search():void{
        alert("Searching for " + this.textToSearch);
        this.textToSearch = "";
    }

}
