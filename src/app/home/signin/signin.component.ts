import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth/auth.service';
import {Router} from '@angular/router';
import {PlataformDetectorService} from '../../core/platform/plataform-detector.service';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlataformDetectorService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
    this.authService.authenticate(userName, password)
      .subscribe(() => this.router.navigate(['user', userName]),
        error => {
          console.log(error);
          this.loginForm.reset();
          // tslint:disable-next-line:no-unused-expression
          this.platformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
          alert('Invalid Username or password');
        });
  }
}
