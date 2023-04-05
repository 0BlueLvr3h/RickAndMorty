import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CharacterService } from 'src/app/services/character.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit{
  searchSubject = new Subject<string>();

  constructor(private characterService: CharacterService, private router: Router) {}

  ngOnInit() {
    this.searchSubject.pipe(debounceTime(500)).subscribe(value => {
      this.characterService.getCharactersByName(value).subscribe(data => {
        this.characterService.setData(data);
        this.router.navigate(['/search']);
      });
    });
  }

  search(value : string){
    this.searchSubject.next(value);
  }
}