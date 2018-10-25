import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/shared/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

}
