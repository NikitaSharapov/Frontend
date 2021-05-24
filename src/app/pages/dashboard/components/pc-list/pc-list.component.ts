import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { AddPcComponent } from 'src/app/modal/add-pc/add-pc.component';
import { DelGroupComponent } from 'src/app/modal/del-group/del-group.component';
import { DelPcComponent } from 'src/app/modal/del-pc/del-pc.component';

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.scss'],
})

export class PcListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

//триггер всплывающего меню
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  triggerMethod() {
    this.trigger.openMenu();
  }
//триггер всплывающего меню

  
//методы модальных окон
  openAddPcDialog(): void {
    this.dialog.open(AddPcComponent, {
      width: '300px',
    });
  }

  openDelPcDialog(): void {
    this.dialog.open(DelPcComponent, {
      width: '300px',
    });
  }

  openDelGroupDialog(): void {
    this.dialog.open(DelGroupComponent, {
      width: '300px',
    });
  }
//методы модальных окон

  ngOnInit(): void {
  }

}
