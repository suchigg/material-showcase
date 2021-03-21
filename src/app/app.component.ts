import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
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

  minDate = new Date();
  maxDate = new Date(2021, 2, 30);

  excludeSaturdayAndSunday = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  constructor(private readonly snackBar: MatSnackBar,
              private readonly dialog: MatDialog) {}

  public openSnackbar(msg: string, action?: string): void {
    const conf: MatSnackBarConfig = {duration: 2000};
    const snackbarRef = this.snackBar.open(msg, action, conf);

    snackbarRef.afterDismissed().subscribe( () => console.log('snackbar dismissed'));
    snackbarRef.onAction().subscribe( () => console.log('the snackbar action was triggerd'));
  }

  public openCustomSnackbar(msg: string): void {
    this.snackBar.openFromComponent(CustomSnackbarComponent, {duration: 2000})
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogExampleComponent, {data: {name: 'Luca'}});

    dialogRef.afterClosed().subscribe(res => {
      console.log(`Dialog result: ${res}`);
    });
  }

}

@Component({
  selector: 'custom-snackbar',
  template: `<span>My custom snackbar</span>`,
  styles: [
    `span {
      color: orange;
    }`
  ]
})
export class CustomSnackbarComponent {}


