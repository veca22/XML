export class Ad {

  name: string;
  profilePicture: string;
  startofAd: Date;
  endofAd: Date;
  description: string;


  constructor(name: string, profilePicture: string, startofAd: Date, endofAd: Date, description: string) {
    this.name = name;
    this.profilePicture = profilePicture;
    this.startofAd = startofAd;
    this.endofAd = endofAd;
    this.description = description;
  }
}
