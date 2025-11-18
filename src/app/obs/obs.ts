import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, Observable, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-obs',
  imports: [],
  templateUrl: './obs.html',
  styleUrl: './obs.css',
})
export class Obs implements OnInit, OnDestroy{
  private obsSubscription: Subscription = new Subscription;
  constructor(){

  }
 ngOnInit() {
   const customObservable = new Observable<number>(observer=>{
    let count=0;
    const intervalId = setInterval(()=>{
      observer.next(count);
      if(count==3){
        observer.complete();
      }
      if(count>5){
        observer.error(new Error('Count is greater than 5!'));
      }
      count++;
    },2000);
    return ()=>{
      console.log("Cleanup");
      clearInterval(intervalId);
    }
   })

   this.obsSubscription = customObservable.pipe(
    filter(data=> data>0),
    map((data: number)=> `Round: ${data+1}`)
   ).subscribe(
    data =>console.log('sub1', data),
    error => console.log('Error:', error.message),
    () => console.log('Completed'))
 };
  
   unsubscribe() {
    console.log('Unsubscribing manually...');
    this.obsSubscription.unsubscribe();
  }
  ngOnDestroy(): void {
    console.log("Component destroyed");
    this.obsSubscription.unsubscribe();
  }
}
