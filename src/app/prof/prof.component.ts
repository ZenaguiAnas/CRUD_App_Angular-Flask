import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit , OnDestroy{

constructor(){

}

ngOnInit(){
// code 

}



  flag:boolean = false ;
// array of json objects
  etudiants = [ {
    name: 'lotfi',
    sexe: 'Masculin' },
    {
    name: 'yassine',
    sexe: 'Masculin' },
    {
    name: 'sara', sexe: 'Feminin'
    } ];

    age:number = 10 ;

  active(){
    if(this.flag == true )
      this.flag = false ;
      else 
      this.flag = true ;

  }

currentDate = new Date();


lastUpdate = new Promise((resolve, reject) => { 
  const date = new Date();
  setTimeout(
  () => { resolve("Promise complete!");
  }, 2000 );
  });


ngOnDestroy(){

  // traitement
}

}
