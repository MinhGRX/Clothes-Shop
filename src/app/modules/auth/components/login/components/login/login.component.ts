import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/components/base.component';
import { AuthService } from 'src/app/data/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
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

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(['/']);
    }
  }
}
