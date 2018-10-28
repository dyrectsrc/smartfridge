import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatButtonModule, MatCardModule, MatSelectModule, MatGridListModule, MatExpansionModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [MatFormFieldModule, MatButtonModule, MatSelectModule, MatCardModule, MatGridListModule, MatExpansionModule, MatInputModule],
  exports: [MatFormFieldModule, MatButtonModule, MatSelectModule, MatCardModule, MatGridListModule, MatExpansionModule, MatInputModule]
})

export class MaterialModule {

}
