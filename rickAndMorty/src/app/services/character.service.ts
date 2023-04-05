import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private url: string = "https://rickandmortyapi.com/api/character/";
  private datas: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private selectedCharacter: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {}

  getAll(page:number) : Observable<any>{
    return this.http.get<any>(this.url + "?page="+ page).pipe(
      map(data => {
        return data.results;
      })
    );
  }

  getCharacter(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.get<any>(url).pipe(
      map(data => {
        return data;
      })
    );
  }

  getCharactersByName(name: string): Observable<any[]> {
    const nameUrl = "https://rickandmortyapi.com/api/character/?name=";
    const url = `${nameUrl}${name}`;
    return this.http.get<any>(url).pipe(
      map(data => {
        return data.results;
      })
    );
  }

  getEpisode(ep : string): Observable<any[]>{
    return this.http.get<any>(ep).pipe(
      map(data=>{
        return data;
      })
    )
  }

  setCharacter(data : any[]){
    this.selectedCharacter.next(data);
  }

  getSelected(){
    return this.selectedCharacter.asObservable();
  }

  setData(data : any[]){
    this.datas.next(data);
  }
  

  getData() {
    return this.datas.asObservable();
  }

}
