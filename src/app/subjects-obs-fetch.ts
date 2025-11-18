import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsObsFetch {
  // Subjects for state management
  private postsSubject$ = new BehaviorSubject<any[]>([]);
  private loadingSubject$ = new BehaviorSubject<boolean>(false);
  private errorSubject$ = new BehaviorSubject<string>('');

  // Public observables
  posts$ = this.postsSubject$.asObservable();
  loading$ = this.loadingSubject$.asObservable();
  error$ = this.errorSubject$.asObservable();

  constructor(private http: HttpClient) {}

  // Fetch and emit to Subjects
  fetchPosts() {
    this.loadingSubject$.next(true);
    this.errorSubject$.next('');

    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        tap(data => {
        console.log("Fetching data from API (Subjects)");
          this.postsSubject$.next(data as any[]);
        }),
        catchError(error => {
          this.errorSubject$.next('Error fetching data');
          return of([]);
        })
      )
      .subscribe({
        complete: () => {
          this.loadingSubject$.next(false);
        }
      });
  }

  // Manually update posts
  updatePosts(posts: any[]) {
    this.postsSubject$.next(posts);
  }

  // Get current posts without subscribing
  getCurrentPosts() {
    return this.postsSubject$.value;
  }

  // Clear all data
  clearData() {
    this.postsSubject$.next([]);
    this.errorSubject$.next('');
    this.loadingSubject$.next(false);
  }
}
