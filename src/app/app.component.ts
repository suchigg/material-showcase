import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'components-showcase';

  opened = false;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  selectedValue: string;
  selectedFEValue: string;

  options = ['angular', 'vue', 'react', 'ember', 'jquery'];
  filteredOptions: Observable<string[]>;
  optionsObj = [{name: 'Angular', value: 'angular'}, {name: 'React', value: 'react'}, {name: 'Vue', value: 'vue'}]
  displayFn = (item) => {return item.value || undefined}

  tech = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.filteredOptions = this.tech.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


}


