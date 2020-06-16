import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Comment} from '../../model/comment';

@Component({
  selector: 'app-rate-dialog',
  templateUrl: './rate-dialog.component.html',
  styleUrls: ['./rate-dialog.component.css']
})
export class RateDialogComponent implements OnInit {

  RateFormGroup: FormGroup;
  comment: Comment;
  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<RateDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {
    console.log('Ispod data za dialog');
    console.log(data);
  }

  ngOnInit() {
    this.RateFormGroup = this.formBuilder.group({
      carRating: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1),
        Validators.pattern('[0-5]*')]),
      commentId: new FormControl('')
    });
  }

  get f() {
    return this.RateFormGroup.controls;
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    if (this.RateFormGroup.invalid) {
      return;
    }

    this.comment = new Comment();
    // Nastavak ovde

  }

}
