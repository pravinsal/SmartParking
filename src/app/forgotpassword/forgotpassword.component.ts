import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.less']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
) { 
    
}

ngOnInit() {
  this.forgotForm = this.formBuilder.group({
      username: ['', Validators.required]
  });
}

get f() { return this.forgotForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.forgotForm.invalid) {
      return;
  }

  this.loading = true;

}

}
