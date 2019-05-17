import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact;
  constructor() {
    this.contact = {
      name: "",
      phone: "",
      addressLine1: "",
      addressLine2: "",
      city : ""
    }
   }

  ngOnInit() {
  }

}
