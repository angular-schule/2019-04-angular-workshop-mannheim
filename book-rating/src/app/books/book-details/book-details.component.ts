import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, filter, reduce, scan } from 'rxjs/operators';
import { of, from, Observable } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {
   this.route.paramMap
    .pipe(
      map(params => params.get('isbn')),
      map(isbn => this.bs.getSingle(isbn))
    )
   .subscribe(book$ =>
      book$.subscribe(book => this.isbn = book.title));



  }

}
