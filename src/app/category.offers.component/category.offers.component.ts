import { Component, OnDestroy, OnInit } from '@angular/core';
import { offer } from '../models/offer.model';
import { Subject, takeUntil } from 'rxjs';
import { OfferServices } from '../services/offer.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-offers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.offers.component.html',
  styleUrl: './category.offers.component.css',
})
export class CategoryOffersComponent implements OnInit, OnDestroy{

categoryOffers : offer[] = [];
selectedCategory = 'electronics';
isLoading : boolean = false;
private destroy$ = new Subject<void>();

constructor(private offerService : OfferServices){

}
ngOnInit(): void {
  this.loadOffersByCategory(this.selectedCategory)
}
loadOffersByCategory(category:string): void{
  this.offerService.getOffersByCategory(category)
  .pipe(takeUntil(this.destroy$))
  .subscribe(offers=>{
    this.categoryOffers = offers;
  });
}
onCategoryChange(category : string) : void{
  this.selectedCategory = category;
  this.loadOffersByCategory(category);
}
ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();
}
}
