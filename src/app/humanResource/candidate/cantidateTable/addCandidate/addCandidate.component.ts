import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {HttpClient,} from "@angular/common/http";

;
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HrTableService} from "../../../../services/hrTable.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {VacanciesTableService} from "../../../../services/vacanciesTable.service";
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-addCandidate',
  templateUrl: './addCandidate.component.html',
  styleUrls: ['./addCandidate.component.css'],
  providers: [DatePipe]
})
export class AddCandidateComponent implements OnInit {
  id: number = Number();//fshije me von
  isUpdate: boolean = false;
  vacancies: any;
  selected: any;
  selectedVacancy: any = {
    idVacancy: 0, vacancy1: ''
  }

  constructor(private http: HttpClient,
              private router: Router,
              private datePipe : DatePipe,
              private hrService: HrTableService,
              private _snackBar: MatSnackBar,
              private route: ActivatedRoute,
              private vacanciesService: VacanciesTableService

              // @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  get f() {
    return this.hrForm.controls;
  }

  // upload file
  onFileChange(event: any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.hrForm.patchValue({
        fileSource: file
      });
    }
  }

  hrForm = new FormGroup({
    CandidateName: new FormControl('', [Validators.required, Validators.pattern("^[A-Z]{1}[a-z]+")]),
    CandidateSurname: new FormControl('', [Validators.required, Validators.pattern("^[A-Z]{1}[a-z]+")]),
    CandidateMobile: new FormControl('', [Validators.required, Validators.pattern("^(00355|\\+355|0)[0-9]{9}$")]),
    CandidateEmail: new FormControl('', [Validators.required, Validators.email]),
    Position: new FormControl(''),
    CandidateCv: new FormControl(''),
    datecreated: new FormControl('ss'),
  })
  // getErrorMessage() {
  //   if (this.hrForm.value.CandidateEmail.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //
  //   return this.hrForm.value.CandidateEmail.hasError('email') ? 'Not a valid email' : '';
  // }
  ngOnInit(): void {
    this.showall();
    this.route.params.subscribe(params => {
      this.id = params['id']
    });
    if (this.id) {
      this.hrService.getTable(this.id).subscribe((result) => {
        this.hrForm.patchValue(result)
      })
    }
  }

  onNoClick() {
    this.router.navigateByUrl('hr/candidates')
  }

  refresh(): void {
    window.location.reload();
  }

  onSubmit() {
    if (this.id){
      if (this.hrForm.valid) {
        console.log(this.hrForm.value);
        this.hrForm.value.datecreated = this.datePipe.transform(new Date(), "yyyy-MM-dd'T'HH:mm:ss.sss");
        this.hrService.update(this.id, this.hrForm.value)
          .subscribe(() => {
            this._snackBar.open(' Updated Successfully', 'Close', {
              duration: 3000,
              verticalPosition: "bottom",
            });
            this.router.navigate(['hr/candidates']);
          });
      }
    }
    else {
      if (this.hrForm.valid) {
        this.hrForm.value.datecreated = this.datePipe.transform(new Date(), "yyyy-MM-dd'T'HH:mm:ss.sss");
        console.log(this.hrForm.value)
          this.hrService.create(this.hrForm.value)
            .subscribe((response) => {
                console.log(response);

                this._snackBar.open(' Added Successfully', 'Close', {
                  duration: 3000,
                  verticalPosition: "bottom"
                });
                this.router.navigate(['hr/candidates']);
              },
              () => {

                this._snackBar.open('Something went wrong', 'Close', {
                  duration: 3000,
                  verticalPosition: "bottom"
                });
                this.refresh();
              });
        }
      }
  }

  handleUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    // reader.readAsArrayBuffer(file);
    reader.onload = () => {
      console.log(reader.result);
    };
  }

  formChanged(): void {
    this.selectedVacancy.id = parseInt(this.selectedVacancy.id);
  }

  showall() {
    return this.vacanciesService.getAllTable().subscribe(
      (data: any) => {
        this.vacancies = data;
      }
    )
  }

}
