import { ChangeDetectionStrategy, Component, ViewChild, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  options: any = [];
  filteredOptions$!: Observable<any[]>;
  constructor(
    private UserService: UserService,
    private Router: Router
  ) { }
  @ViewChild('autoInput') input!: any;

  ngOnInit() {
    // this.options = ['Option 1', 'Option 2', 'Option 3'];
    this.filteredOptions$ = of(this.options);
    this.UserService.getAllUser().subscribe(res => {
      this.options = res;
    })
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((optionValue: any) => optionValue.email.toLowerCase().includes(value));
  }

  getFilteredOptions(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => {
        return this.filter(filterString)
      }),
    );
  }

  onChange() {
    this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
  }

  onSelectionChange($event: any) {
    this.filteredOptions$ = this.getFilteredOptions($event);
    this.Router.navigate(['/iyahuu/', $event])
  }



}
