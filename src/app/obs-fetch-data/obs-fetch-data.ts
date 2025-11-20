import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, finalize, Observable, of, Subscription, tap } from 'rxjs';
import { SubjectsObsFetch } from '../subjects-obs-fetch';
@Component({
  selector: 'app-obs-fetch-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obs-fetch-data.html',
  styleUrl: './obs-fetch-data.css',
})
export class ObsFetchData implements OnInit, OnDestroy {
  posts: any[] = [];
  loading = true;
  error: string = '';
  private subsription: Subscription = new Subscription();
  constructor(private http: HttpClient, private subjectsObsFetch: SubjectsObsFetch) {

  }
  // ngOnInit(): void {
  //   this.fetchData();
  // }
  ngOnInit() {
    this.subjectsObsFetch.fetchPosts();
    this.subsription = this.subjectsObsFetch.posts$.subscribe(posts => {
      this.posts = posts;
    });
  }

  fetchData() {

    this.loading = true;
    this.error = '';

    const fetchPosts$: Observable<any> = this.http.get('https://jsonplaceholder.typicode.com/posts');
    this.subsription = fetchPosts$.pipe(
      tap(data => {
        console.log("Data recievd from api - FEATURE-2-CHANGE");
        console.log("Change from feature-branch-2");
      }),
      catchError(error => {
        this.error = 'Error fetching data';
        return of([]);
      }),
      finalize(() => {
        console.log("req Completed");
        this.loading = false;
      })
    ).subscribe(
      data => {
        console.log("Storing data in comp");
        this.posts = data;
        console.log("posts loaded", this.posts.length);
      }
    )
  }
  cancelFetch() {
    console.log("Cancelling fetch");
    this.subsription.unsubscribe();
    this.loading = false;
  }
  ngOnDestroy(): void {
    console.log('Component destroyed, cleaning up');
    this.subsription.unsubscribe();
  }
}
