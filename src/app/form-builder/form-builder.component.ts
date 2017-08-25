import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators, AbstractControl} from '@angular/forms';
@Component({
  selector: 'in-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
	myForm: FormGroup;

	sku: AbstractControl;


  constructor(fb: FormBuilder) {
  	this.myForm= fb.group({
  		'sku': ['', Validators.required]
  	});
  	this.sku = this.myForm.controls['sku'];
	  
	  this.myForm.valueChanges.subscribe(
	  	(form:any)=>{
	  		console.log('form changed to: ', form);
	  	}
	  );
  }

  ngOnInit() {
  }

  onSubmit(value: string):void {
  	console.log("You have submitted a value", value);
  }	

}
