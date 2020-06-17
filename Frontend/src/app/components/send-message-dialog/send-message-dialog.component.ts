import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MessageModel} from '../../model/messageModel';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-send-message-dialog',
  templateUrl: './send-message-dialog.component.html',
  styleUrls: ['./send-message-dialog.component.css']
})
export class SendMessageDialogComponent implements OnInit {
  private loginForm: FormGroup;
  private submitted = false;
  messageModel: MessageModel;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public dialogRef: MatDialogRef<SendMessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dataEmail: any,
    private messageService: MessageService) {
    this.messageModel = new MessageModel('', '', '', '');
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      subject: ['', Validators.required],
      text: ['', Validators.required]
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  private onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.messageModel.subject = this.f.subject.value;
    this.messageModel.text = this.f.text.value;
    this.messageModel.email = this.dataEmail;
    // this.messageModel.emailAd;

    this.messageService.sendMessage(this.messageModel).subscribe(
      res => {
        alert('Reserved');
        this.dialogRef.close();
      },
      error => {
        alert('Error');
      }
    );
  }

}

