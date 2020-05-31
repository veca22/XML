export class Ad {

  adName: string;
  profilePicture: string;
 // startofDate: Date;//endofDate: Date;
  description: string;


  constructor(adName: string, profilePicture: string,  description: string) {
    this.adName = adName;
    this.profilePicture = profilePicture;
   // this.startofDate = startofDate;
  //  this.endofDate = endofDate;
    this.description = description;
  }
}
