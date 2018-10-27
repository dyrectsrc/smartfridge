import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/shared/item.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private itemService: ItemService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(itemForm: NgForm) {
    if (itemForm.value.$key == null) {
      this.itemService.insertItem(itemForm.value);
    } else {
      this.itemService.updateItem(itemForm.value);
    this.resetForm(itemForm);
    this.toastr.success('Submitted Succcessfully', 'Item Register');
    }
  }

  resetForm(itemForm?: NgForm) {
    if (itemForm != null) {
      itemForm.reset();
      this.itemService.selectedItem = {
          $key: '',
          itemType: '',
          name: '',
          fillFactor: null
      };
  }
  }

}
