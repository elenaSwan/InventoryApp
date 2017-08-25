import { Component, OnInit, ReflectiveInjector} from '@angular/core';
import {UserService} from '../services/services.component';

@Component({
  selector: 'in-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})
export class UserDemoComponent implements OnInit {
	userName: String;
	userService: UserService;

  constructor() {

  	const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);

	this.userService = injector.get(UserService);	

   }

   signIn() {
   	this.userService.setUser({
   		name:'Nate Murray'
   	});

   	this.userName = this.userService.getUser().name;
	   	console.log('User name is: ', this.userName);
   }

  ngOnInit() {
  }

}
