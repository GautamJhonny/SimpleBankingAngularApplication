export class CusData {
  
  private cname: string;
  private email: string;
  private password: string;
  private phoneno:number;
  private aadharno:number ;
  private panno:number;
  private gender: string;
  constructor(cname: string, email: string, password: string,phoneno:number,aadharno:number,panno:number, gender: string) {
    this.cname = cname;
    this.email = email;
    this.password = password;
    this.phoneno =phoneno;
    this.aadharno = aadharno;
    this.panno = panno ;
    this.gender = gender;
  }

  getCname(): string {
    return this.cname;
  }
  getEmail(): string {
    return this.email;
  }
  getPassword(): string {
    return this.password;
  }
  getPhoneno(): number {
    return this.phoneno;
  }
  getAadharno(): number {
    return this.aadharno;
  }
  getPanno(): number {
    return this.panno;
  }
 
  getGender(): string {
    return this.gender;
  }
}
