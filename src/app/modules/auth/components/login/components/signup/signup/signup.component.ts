import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/components/base.component';
import { AuthService } from 'src/app/data/services/auth.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent extends BaseComponent{
  signupForm!: FormGroup;

  constructor(
      private authService: AuthService,
      private router: Router
    ) { 
      super();
    }
  
    ngOnInit(): void {
      this.authService.isAuthenticated$.pipe(
        takeUntil(this.destroyed$)
      ).subscribe(isAuthenticated => {
        if (isAuthenticated) {
          this.router.navigate(['']);
        }
      });

      this.signupForm = new FormGroup({
          email: new FormControl('', Validators.required),
          username: new FormControl('', Validators.required),
          password: new FormControl('', Validators.required),
      });
    }

    onSubmit() {
      if (this.signupForm.valid) {
        this.router.navigate(['/']);
      }
    }
}
