import { Component, OnInit } from '@angular/core';

import { BurgersService } from '../api/api/burgers.service';
import { Burger } from '../api/model/burger';

@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css']
})
export class BurgerListComponent implements OnInit {

  burgers : Burger[];

  constructor(private burgersService : BurgersService) { }

  ngOnInit(): void {
    this.getBurgers();
  }

  getBurgers() : void {
    this.burgersService.listBurgers().subscribe(burgers => this.burgers = burgers);
  }

}
