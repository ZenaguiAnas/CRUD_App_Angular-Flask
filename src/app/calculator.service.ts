import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// metier d;une calculatrice 
export class CalculatorService {

  constructor() { }

  // busniss
  add(a : number , b : number): number {

    return a + b ;

}

 // busniss
 sous(a : number , b : number): number {

  return a - b ;

}

 // busniss
 multi(a : number , b : number): number {

  return a * b ;

}

 // busniss
 div(a : number , b : number): number {
  if(b ! = 0 )
   return a + b ;
   else 
    return 0 ;

}

mod(a : number , b : number): number {
 
   return a % b ;
 

}

}
