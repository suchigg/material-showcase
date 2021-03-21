import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'components-showcase';

  constructor(private readonly snackBar: MatSnackBar) {}

  public openSnackbar(msg: string, action?: string): void {
    const conf: MatSnackBarConfig = {duration: 2000};
    const snackbarRef = this.snackBar.open(msg, action, conf);

    snackbarRef.afterDismissed().subscribe( () => console.log('snackbar dismissed'));
    snackbarRef.onAction().subscribe( () => console.log('the snackbar action was triggerd'));
  }

  public openCustomSnackbar(msg: string): void {
    this.snackBar.openFromComponent(CustomSnackbarComponent, {duration: 2000})
  }


}


