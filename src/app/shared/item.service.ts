import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Item } from './item.model';

@Injectable()
export class ItemService {
  itemList: AngularFireList<any>;
  selectedItem: Item = new Item();
  fillFactorValues = [
    { value: .1, fillFactor: "10%" },
    { value: .2, fillFactor: "20%" },
    { value: .3, fillFactor: "30%" },
    { value: .4, fillFactor: "40%" },
    { value: .5, fillFactor: "50%" },
    { value: .6, fillFactor: "60%" },
    { value: .7, fillFactor: "70%" },
    { value: .8, fillFactor: "80%" },
    { value: .9, fillFactor: "90%" },
    { value: 1, fillFactor: "100%" }
  ];
  itemTypeValues = [
    { value: "dairy", type: "Dairy" },
    { value: "drinks", type: "Drinks" },
    { value: "eggs", type: "Eggs" },
    { value: "sauce", type: "Sauce" },
    { value: "frozen", type: "Frozen" },
    { value: "vegetables", type: "Vegetables" },
    { value: "fruit", type: "Fruit" },
    { value: "meat", type: "Meat" }
  ];
  constructor(private firebase: AngularFireDatabase) { }

  //I used *ngIf to show items by fill factor and to show the fill factor by item type
  getItems() {
    this.itemList = this.firebase.list('items');
    return this.itemList;
  }

  handleItemAdded(item: Item) {
    this.itemList.push({
      name: item.name,
      itemType: item.itemType,
      fillFactor: item.fillFactor
    });
  }

  updateItem(item: Item) {
    this.itemList.update(item.itemUUID,
      {
        name: item.name,
        itemType: item.itemType,
        fillFactor: item.fillFactor
      });
  }
  //I was not sure how forget Item differed from remove item and I was under the impression
  //that item type was a category of an item
  handleItemRemoved(itemUUID: string) {
    this.itemList.remove(itemUUID);
  }
}
