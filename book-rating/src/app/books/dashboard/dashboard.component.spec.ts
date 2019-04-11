import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { BookComponent } from '../book/book.component';
import { NumberArrayPipe } from '../shared/number-array.pipe';
import { BookRatingService } from '../shared/book-rating.service';
import { Book } from '../shared/book';
import { BooksTestingModule } from '../books.testing-module';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'br-book',
  template: '😀'
})
export class TestBookComponent {
  @Input() book: Book;
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {

    const bookRatingMock = {
      rateUp: book => book
    };

    TestBed.configureTestingModule({
      declarations: [
        // *** Unit Test ***
        DashboardComponent,
        TestBookComponent
      ],
      imports: [
        BooksTestingModule
      ],
      providers: [{
        provide: BookRatingService,
        useValue: bookRatingMock
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('doRateUp() should forward the execution to BookRatingService', () => {

    const rs = TestBed.get(BookRatingService);
    spyOn(rs, 'rateUp').and.callThrough();

    component.doRateUp({ isbn: '000' } as Book);

    expect(rs.rateUp).toHaveBeenCalled();
    expect(rs.rateUp).not.toHaveBeenCalledTimes(2);
  });

  it('doRateUp should call updateList', () => {
    spyOn(component, 'updateAndSortList');
    component.doRateUp({ isbn: '000' } as Book);

    expect(component.updateAndSortList).toHaveBeenCalled();
  });
});
