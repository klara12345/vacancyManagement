import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {MatTable} from "@angular/material/table";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from '@angular/material/paginator';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HrTableService} from "../../../services/hrTable.service";
import {HrCandidateModel} from "../../../models/hrCandidate.model";
import {HttpClient} from "@angular/common/http";
import {LoginAuthService} from "../../../services/login-auth.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {InfoComponent} from "./info/info.component";
import {MoveBlacklistComponent} from "../../../teamLeader/candidate/move-blacklist/move-blacklist.component";

@Component({
  selector: 'app-candidateTable',
  templateUrl: './candidateTable.component.html',
  styleUrls: ['./candidateTable.component.css']
})
export class CandidateTableComponent implements OnInit {

  element: HrCandidateModel | undefined;

  displayedColumnsHr: string[] = ['CandidateName', 'CandidateSurname', 'email', 'action'];
  displayedColumnsTl: string[] = ['CandidateName', 'CandidateSurname', 'email', 'CandidateCv', 'action'];
  tableData!: MatTableDataSource<CandidateTableComponent>;
  hrTable: HrCandidateModel[];
  newSize = 0;
  newPageSize = 10;
  highlightedRows = [];
  highlightedRowss = {};
  isDisabled = false;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('table', {static: false}) table: MatTable<any>;
  @ViewChild('filter', {static: false}) filter: ElementRef;

  filterForm: FormGroup = new FormGroup({});

  role: string;

  constructor(private router: Router,
              private hrService: HrTableService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private http: HttpClient,
              private loginAuth : LoginAuthService,
              private dialog : MatDialog
  ) {
  }

  ngOnInit(): void {
    this.hrService.getAllTable().subscribe((allData) => {

      this.hrTable = allData;
    });
    this.filterForm = this.formBuilder.group({
      CandidateName: [""],
    });
    this.hrService.list(this.paginator, this.sort, this.filterForm.value).subscribe((response: any) => {
      this.tableData = new MatTableDataSource<CandidateTableComponent>(response);
      this.tableData.paginator = this.paginator;
      this.tableData.sort = this.sort;

    });

  }

  showDetails(element : any) {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    this.dialog.open(InfoComponent, {width : '70%', height: '29%', data : {
      element: element} }
    );
  }

  highlight(row: any) {
    this.highlightedRows.push(row);
    this.highlightedRowss[row.id] = !this.highlightedRowss[row.id];
   // localStorage.setItem('highlight', this.highlightedRows)
  }

  onAdd() {
    this.router.navigate(['hr/candidates/add'])
  }

  update(element: HrCandidateModel) {
    this.router.navigate(['hr/candidates/add/' + element])
  }

  deleteTable(id: number) {
    this.hrService.openConfirmDialog('Are you sure you want to delete it?')
      .afterClosed().subscribe((res => {
      if (res) {
        this.hrService.deleteTable(id).subscribe((result) => {
          console.log(result);
          this.ngOnInit();
        });
      }

    }))
    this.router.navigate(['hr/candidates'])
  }
  getRole(): string{
    this.role = this.loginAuth.getUser(localStorage.getItem('tokenString')).idRole;
    return this.role;
  }

//filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableData.filter = filterValue.trim().toLowerCase();
  }


  moveBlacklist(element : any) {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    this.dialog.open(MoveBlacklistComponent, {panelClass: 'full-width-dialog',  data : {
        element: element} }
    );
    this.ngOnInit();
  }
}
