import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, filter, reduce, scan, mergeMap, concatMap, switchMap, share } from 'rxjs/operators';
import { of, from, Observable } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {
    this.book$ = this.route.paramMap
      .pipe(
        map(params => params.get('isbn')),
        switchMap(isbn => this.bs.getSingle(isbn))
      );
  }
}
