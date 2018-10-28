import { NgModule } from '@angular/core';
import {MatFormFieldModule, MatCardModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [MatFormFieldModule, MatCardModule, MatInputModule],
  exports: [MatFormFieldModule, MatCardModule, MatInputModule]
})

export class MaterialModule {

}
