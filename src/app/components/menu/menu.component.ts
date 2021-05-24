import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddGroupComponent } from 'src/app/modal/add-group/add-group.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  //метод модального окноа
  openAddPcDialog(): void {
    this.dialog.open(AddGroupComponent, {
      width: '300px',
    });
  }

  ngOnInit(): void {
  }

}
