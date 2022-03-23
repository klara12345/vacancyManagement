import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


import {HrCandidateModel} from "../../../models/hrCandidate.model";
import {HrTableService} from "../../../services/hrTable.service";
import {BlacklistService} from "../../../services/blacklist.service";

@Component({
  selector: 'app-blacklist-form',
  templateUrl: './blacklist-form.component.html',
  styleUrls: ['./blacklist-form.component.css']
})
export class BlacklistFormComponent implements OnInit {
  blackListForm: any;
  fileUpload: HrCandidateModel[] = [];
   blacklistId: number = 0;

  constructor(private router: Router,
              private hrTableService: HrTableService,
              private route: ActivatedRoute,
              private blService: BlacklistService) { }

  ngOnInit() {
    // this.hrTableService.getAllTable().subscribe(response => {
    //   console.log(response);
    //   this.fileUpload = response;
    // });
    // this.blacklistId = this.route.snapshot.params['id']
    // this.getBlacklistForm();
    //
    // if (!this.blacklistId) {
    //   this.blacklistId = 0;
    // } else {
    //   this.blService.getElementById(this.blacklistId).subscribe((data: any) => {
    //     this.blackListForm.patchValue({
    //       idBlackListCandidate: data.idBlackListCandidate,
    //       Reason: data.Reason,
    //       DateTimeCreated: data.DateTimeCreated
    //     })
    //   })
    // }
  }
  // getBlacklistForm() {
  //   return this.blackListForm = new FormGroup({
  //     'idBlackListCandidate': new FormControl('', Validators.required),
  //     'Reason': new FormControl('', Validators.required),
  //     'DatetimeCreated': new FormControl('', Validators.required)
  //   });
  onNoClick() {
    this.router.navigate(['black-list'])
  }
}

  // onSubmit() {
    // if (this.blacklistId != 0) {
    //   this.blService.update(this.blacklistId, this.blackListForm.value).subscribe(
    //     () => {
    //     },
    //     (error) => {
    //       console.error(error);
    //     }
    //   );
    // } else {
    //   this.blService.create(this.blackListForm.value).subscribe(
    //     () => {
    //     },
    //     (error) => {
    //       console.error(error);
    //     }
    //   );
  //   }
  //   this.onNoClick();
  // }

  // onNoClick() {
  //   this.router.navigate(['black-list'])
  // }
// }
