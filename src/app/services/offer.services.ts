import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { offer } from '../models/offer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OfferServices {
  // private apiUrl = 'http://localhost:3000/api/offers';
  private apiUrl = 'assets/offers.json';
  private trackingApi = '/api/offers';

  private offerSubject = new BehaviorSubject<offer[]>([]);
  private offers$ = this.offerSubject.asObservable();

  // loading state
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private http :HttpClient){
    this.loadOffers();
  }
  loadOffers(): void{
    this.loadingSubject.next(true);

    this.http.get<offer[]>(this.apiUrl)
    .pipe(
      tap(data=>{
        this.offerSubject.next(data);
        this.loadingSubject.next(false);
      }),
      catchError(error=>{
        console.log("Error laoding offer", error);
        this.loadingSubject.next(false);
        return throwError(()=> error)
      })
    ).subscribe();
  }
  getAllOffers():Observable<offer[]>{
    return this.offers$;
  }
  getActiveOffers() : Observable<offer[]>{
    return this.offers$.pipe(
      map(offers => offers.filter(offer => offer.isActive))
    )
  }

  getOffersByCategory(category : string): Observable<offer[]>{
    return this.offers$.pipe(
      map(offers => offers.filter(offer => offer.category === category))
    );
  }

  getOfferById(id : string) : Observable<offer | undefined>{
    return this.offers$.pipe(
      map(offers => offers.find(offer => offer.id === id))
    );
  }

  trackNudgeClick(offerId : string) : Observable<any>{
    console.log("nudge clicked");
    return of(void 0);
    // return this.http.post(`${this.apiUrl}/${offerId}/click`, {});
  }

  dismissNudge(offerId : string) : Observable<any>{
    return this.http.post(`${this.apiUrl}/${offerId}/dismiss`, {});
  }
  calculateDiscount(originalPrice : number, discountPercent : number): number{
    return originalPrice - (originalPrice * discountPercent / 100);
  }
  isLoading(): Observable<boolean>{
    return this.loading$;
  }
}
