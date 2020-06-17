export class MessageModel {
  text: string;
  subject: string;
  email: string;
  emailAd: string;

  constructor(text: string, subject: string, email: string, emailAd: string) {
    this.email = email;
    this.subject = subject;
    this.text = text;
    this.emailAd = emailAd;
  }
}
