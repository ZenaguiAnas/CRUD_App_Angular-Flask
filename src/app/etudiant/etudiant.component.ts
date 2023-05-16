import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { PostsModule } from '../posts/posts.module';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {

  // le code ts 
  // les prorietes 
  name:string = "LSI 2023 Angular" ;

  // property bindding

  flag:boolean = false ;

  results!:PostsModule[] ;

  constructor(private myService:ApiService){


    setTimeout( ()=>{
      // declancher un traitement 
        this.flag = true ;
    } , 3000); 



  }

// event bidding
  clickme(){

     // console.log("me!!!!!!");
      // lunch property biddig 

     // this.name = "Event bidding";

      this.myService.getPosts().subscribe(

          (data)=>{


            this.results = data;


          }

      )

        // 
      ;


  }






}
