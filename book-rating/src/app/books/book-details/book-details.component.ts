import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, filter, reduce, scan } from 'rxjs/operators';
import { of, from, Observable } from 'rxjs';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    { // this.route.paramMap
    //   .pipe(
    //     map(params => params.get('isbn'))
    //   )
    //   .subscribe(isbn => this.isbn = isbn);
    }

    // Observer
    const observer = {
      next: b => console.log(b),
      error: e => console.log('❌ ERROR', e),
      complete: () => console.log('✅ Completed!')
    };

    // Observable
    const myObservable$ = new Observable<number>(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.next(4);
      subscriber.next(5);

      setTimeout(() => subscriber.complete(), 1000);
      // setTimeout(() => subscriber.error('😱'), 1000);
    });

    // Subscription
    const subscription = myObservable$
    .pipe(
      map(z => z * 10),
      filter(z => z > 10),
      scan((acc, value) => acc + value)
    )
    .subscribe(observer);

    // unsubscribe
    setTimeout(() => subscription.unsubscribe(), 3000);

  }

}
