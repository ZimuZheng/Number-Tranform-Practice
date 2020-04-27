import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhoneNumberService } from 'src/app/services/numberchange.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  phone: string = "";

  transform: string[];

  totalCount: number = 0;

  constructor(private http: HttpClient,
              private phoneNumberService: PhoneNumberService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.phone.length != 10) {
      this.transform = ["Number Length is Wrong"];
    } else {
      this.phoneNumberService.getResult(this.phone).subscribe((resp) => {
      this.transform = <string[]> resp;
      this.totalCount = this.transform.length;
    });
    }
    
  }
}
