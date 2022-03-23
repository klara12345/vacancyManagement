import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {VacanciesTableService} from "../../../services/vacanciesTable.service";
import {HrCandidateModel} from "../../../models/hrCandidate.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {LoginGuard} from "../../../login/login.guard";

@Component({
  selector: 'app-hr-add-new-humanResource',
  templateUrl: './vacancyTable.component.html',
  styleUrls: ['./vacancyTable.component.css']
})
export class VacancyTableComponent implements OnInit {
  displayedColumns: string[] = ['VacancyName', 'VacancyDescription', 'DateCreated', 'DateSaved', 'action'];
  tableData: any = [];

  constructor(private router: Router,
              private http : HttpClient,
              private hrServiceT: VacanciesTableService,
              private _snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.hrServiceT.getAllTable().subscribe((allData) => {
      this.tableData = allData;
      console.log(this.tableData)
    })
  }

  onAdd() {
    this.router.navigate(['hr/vacancies/add'])
  }

  update(element: HrCandidateModel) {
    this.router.navigate(['hr/vacancies/add/' + element])
  }

  deleteTable(idV: number){
    console.log(idV)
    this.hrServiceT.openConfirmDialog('Are you sure you want to delete it?')
      .afterClosed().subscribe((res => {
      if (res) {
        this.hrServiceT.deleteTable(idV).subscribe((result) => {
          console.log(result);
          this.ngOnInit();
        });
      }
    }))
    this.router.navigate(['hr/vacancies'])
  }

}
