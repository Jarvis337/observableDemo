import { Component, OnDestroy, OnInit } from '@angular/core';
import { offer } from '../models/offer.model';
import { Subject, takeUntil } from 'rxjs';
import { OfferServices } from '../services/offer.services';
import { DatePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-nudge-banner',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './nudge-banner.component.html',
  styleUrl: './nudge-banner.component.css',
})
export class NudgeBannerComponent implements OnInit, OnDestroy {

  activeOffers : offer[] = [];
  isLoading : boolean = false;
  private destroy$ = new Subject<void>();

  constructor(private offerService : OfferServices){

  }
  ngOnInit(): void {
    this.offerService.getActiveOffers()
    .pipe(takeUntil(this.destroy$))
    .subscribe(offers=>{
      this.activeOffers = offers;
    });

    this.offerService.isLoading()
    .pipe(takeUntil(this.destroy$))
    .subscribe(loading=>{
      this.isLoading = loading;
    });
  }

  onNudgeClick(offer : offer): void{
    this.offerService.trackNudgeClick(offer.id)
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      ()=> {
        console.log("nudge click tracked");
        this.activeOffers = this.activeOffers.filter(o => o.id !== offer.id);
      },
      error=> console.error("error tracking click", error)
    );
  }
  //   .subscribe(
  //     ()=> console.log("nudge click tracked"),
  //     error=> console.error("error tracking click", error)
  //   );
  // }
  onDismiss(offerId : string): void{
  this.offerService.dismissNudge(offerId)
  .pipe(takeUntil(this.destroy$))
  .subscribe(
    ()=> console.log("nudeg click tracked"),
    error=> console.error("error tracking click", error)
  );
}

ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();

}
}
