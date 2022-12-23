import { Component, OnDestroy } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnDestroy {

  constructor(private filterService: FilterService) { }

  searchSubject$ = new Subject<string | undefined>();
  private searchSubscription?: Subscription;

  ngOnDestroy(): void {
    this.searchSubscription?.unsubscribe()
  }

  searchInput(val: Event): void {
    const searchQuery = (val.target as HTMLInputElement).value;

    this.searchSubscription = this.searchSubject$
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((text) => this.filterService.filterByText(text!));

    this.searchSubject$.next(searchQuery?.trim());
  }

}
