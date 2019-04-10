import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { BookComponent } from '../book/book.component';
import { NumberArrayPipe } from '../shared/number-array.pipe';
import { BookRatingService } from '../shared/book-rating.service';
import { Book } from '../shared/book';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {

    const bookRatingMock = {
      rateUp: book => book
    };

    TestBed.configureTestingModule({
      declarations: [
        // *** Integration Test ***
        DashboardComponent,
        BookComponent,
        NumberArrayPipe
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
    const newBook = { isbn: '000' } as Book;

    component.doRateUp(newBook);

    expect(rs.rateUp).toHaveBeenCalled();
    expect(rs.rateUp).not.toHaveBeenCalledTimes(2);
  });
});
