import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

// two way bidding 
  a:number = 1 ;  //! ?
  b:number = 1  ;
// proerty bidding
  res:number = 0 ;

  operation:string  = 'a' ;

  constructor(private myservice:CalculatorService){

  }


  // event bidding 

  add(){

     this.res  = this.a + this.b;

  }

  allinone($event:any){

    this.operation =$event.target.value;
   

switch(this.operation){

  case 'a': 
      this.res = this.myservice.add(this.a , this.b);
      break ;
  case 's': 
      this.res = this.myservice.sous(this.a , this.b);
      break ;
  case 'm': 
      this.res = this.myservice.multi(this.a , this.b);
      break ;
case 'd': 
      this.res = this.myservice.div(this.a , this.b);
      break ;
case 'mo': 
  this.res = this.myservice.mod(this.a , this.b);
      break ;
  

}

  }


}
