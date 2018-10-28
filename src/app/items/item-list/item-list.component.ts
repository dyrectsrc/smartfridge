import { Component, OnInit } from '@angular/core';

import { ItemService } from '../../shared/item.service';
import { Item } from '../../shared/item.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  itemList: Item[];
  constructor(private itemService: ItemService, private tostr: ToastrService) { }

  ngOnInit() {
    const showAll = true;
    const x = this.itemService.getItems();
    x.snapshotChanges().subscribe(item => {
      this.itemList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['itemUUID'] = element.key;
        this.itemList.push(y as Item);
      });
    });
  }

  onEdit(emp: Item) {
    this.itemService.selectedItem = Object.assign({}, emp);
  }

  onDelete(itemUUID: string) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.itemService.handleItemRemoved(itemUUID);
      this.tostr.warning('Deleted Successfully', 'Item register');
    }
  }

}
