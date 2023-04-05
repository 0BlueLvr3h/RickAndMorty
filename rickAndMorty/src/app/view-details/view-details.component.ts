import { Component, EventEmitter, Output, OnInit,OnDestroy } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit,OnDestroy{
  title: string = "titolo";
  content: string = "content";
  isVisible : boolean = false;
  subscription : Subscription;
  character : any;
  episode : any;
  epCodes : string = "";

constructor(private characterService : CharacterService){

}

  ngOnInit() {
    this.subscription = this.characterService.getSelected().subscribe(character =>{
      if(character.length != 0){
        this.isVisible = true;
        this.character = character;

        for(let episode of this.character.episode){
          this.characterService.getEpisode(episode).subscribe(episode =>{
            this.episode = episode;
            this.epCodes +=  this.episode.episode + " " ;          
          });
        }    
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  close() {
    this.isVisible = !this.isVisible
    this.epCodes = "";
  }
}
