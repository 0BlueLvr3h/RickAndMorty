import { Component, OnInit, OnDestroy, HostListener} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {CharacterService} from 'src/app/services/character.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy{
  public characters : any[];
  private subscription : Subscription;
  private characterClicked : any;
  private pageNumber : number;

  constructor(private characterService: CharacterService,private route:ActivatedRoute, private router:Router){

  }

  

  @HostListener('click', ['$event'])
  onImageClick(event: MouseEvent) {
    if (event.target instanceof HTMLImageElement) {
      this.characterService.getCharacter(Number.parseInt(event.target.id)).subscribe(character => {
        this.characterClicked = character;
        this.characterService.setCharacter(this.characterClicked);
      });
    }
  }

  


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pageNumber = params['page'];
      
      if(this.router.url == "/search"){
        this.characterService.getData().subscribe(data =>{
          this.characters = [];
          this.characters.push(...data);
        })
      }else{
        this.subscription = this.characterService.getAll(this.pageNumber).subscribe(data => {
          this.characters = [];
          this.characters.push(...data);
        });
      }
    });

    
  }

  
  
  ngOnDestroy(){
    this.subscription.unsubscribe();

  }


}
