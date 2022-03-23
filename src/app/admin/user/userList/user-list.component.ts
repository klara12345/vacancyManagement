import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {newUserModel} from "../../../models/newUser.model";
import {UserListService} from "../../../services/userList.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-userList',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  id: number = Number();
  element: newUserModel | undefined
  displayedColumns: string[] = ['name', 'surname', 'email', 'user', 'idRole', 'isActive', 'action'];
  tableData: any = [];
  myList: any = {
    "1": "Human Resource",
    "2": "Team Leader",
    "3": "Admin"
  };
  showActive: boolean = false;

  constructor(private router: Router,
              private userListService: UserListService,
              private _snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.userListService.getAllTable().subscribe((allData) => {
      console.log(allData);
      this.tableData = allData;
    })
  }

  // deleteTable(id: number) {
  //   this.userListService.openConfirmDialog('Are you sure you want to delete it?')
  //     .afterClosed().subscribe((res=>{
  //     if(res){
  //       this.userListService.deleteTable(id).subscribe((result) =>{
  //         console.log(result);
  //       });
  //     }
  //     this.ngOnInit();
  //   }))
  // }
   decactive(id:number){
}
  //   if (this.id) {
  //     console.log(this.userForm.value);
  //     this.userListService.update(this.id, this.hrForm.value)
  //       .subscribe(() => {
  //         this._snackBar.open(' Updated Successfully', 'Close', {
  //           duration: 3000,
  //           verticalPosition: "bottom",
  //         });
  //         this.router.navigate(['hr/candidates']);
  //       });
  //   }
  //   this.showActive = !this.showActive;
  // }
  // parseInt(idRole: any) {
  //   return parseInt(idRole);
  // }
  // decactive(id: number) {
  //   this.userListService.openConfirmDialog('Are you sure you want to deactivate it?')
  //     .afterClosed().subscribe((res=>{
  //     if(res){
  //       this.userListService.dactivateUser(id).subscribe((result) =>{
  //         console.log(result);
  //         this.ngOnInit();
  //       });
  //     }
  //     this.showActive = !this.showActive;
  //
  //
  //   }))
  //   this.router.navigate(['/userList'])
  // }
}

