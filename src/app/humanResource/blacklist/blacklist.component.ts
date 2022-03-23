import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {BlacklistService} from "../../services/blacklist.service";


@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.css']
})
export class BlacklistComponent implements OnInit {
  blackListData: any;
  displayedColumns: string[] = ['CandidateName', 'CandidateSurname', 'Reason', 'DatetimeCreated',];

  constructor(private router:Router,
              public dialogService: MatDialog,
              private blService: BlacklistService) { }

  ngOnInit() {
    // this.getBlacklistAll();
  }

  onAdd() {
this.router.navigate(['blacklist-form'])
  }
//
//    getBlacklistAll() {
//      this.blService.getAll().subscribe((data) => {
//        this.blackListData = data;
//      }, (error) => {
//        console.error(error);
//      });
//     }
}
