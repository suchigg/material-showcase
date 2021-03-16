import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const UserMaterialComponents = [MatButtonModule];

@NgModule({
  imports: [UserMaterialComponents],
  exports: [UserMaterialComponents]
})
export class MaterialUIModule { }
