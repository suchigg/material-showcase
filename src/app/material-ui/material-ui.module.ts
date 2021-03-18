import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const UserMaterialComponents = [
  MatButtonModule,
  MatIconModule
];

@NgModule({
  imports: [UserMaterialComponents],
  exports: [UserMaterialComponents]
})
export class MaterialUIModule { }
