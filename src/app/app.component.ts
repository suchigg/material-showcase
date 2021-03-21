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
export class AppComponent {
  title = 'components-showcase';

  constructor(private readonly dialog: MatDialog) {}

  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogExampleComponent, {data: {name: 'Luca'}});

    dialogRef.afterClosed().subscribe(res => {
      console.log(`Dialog result: ${res}`);
    });
  }

}


