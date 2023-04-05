import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pulsante-pagina',
  templateUrl: './pulsante-pagina.component.html',
  styleUrls: ['./pulsante-pagina.component.css']
})
export class PulsantePaginaComponent implements OnInit{

  pageNumber: number = 1
  @ViewChild('backButton') backButtonRef: ElementRef<HTMLButtonElement>;
  @ViewChild('forwardButton') forwardButtonRef: ElementRef<HTMLButtonElement>;

  constructor(private router: Router) { 
  }

  
  ngOnInit(){
    this.router.navigate(['/page', 1]);
  }
  
  onPrevPage() {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.router.navigate(['/page', this.pageNumber]);
    }

  }
  
  onNextPage() {
    if(this.pageNumber<42){
      this.pageNumber++;
      this.router.navigate(['/page', this.pageNumber]);
    }
  }
}
