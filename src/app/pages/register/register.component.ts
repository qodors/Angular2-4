import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, UserService, AuthenticationService } from '../_services/index';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private authenticationService: AuthenticationService) { }

    ngOnInit(){
        if(localStorage.getItem('currentUser')){
            this.router.navigate(['/']);
            return;
        }
    }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    if(data.error_code == 0){
                        this.alertService.success('Registration successful', true);
                        this.router.navigate(['/login']);
                    }
                    this.alertService.error(data.message, true);
                    this.loading = false;
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}

