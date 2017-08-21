import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'in-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any): void {
  	console.log("You have sumbmited a value", form);
  }

}
