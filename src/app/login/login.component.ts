import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Admin } from '../admin.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private employeeService: EmployeeService) {
    this.loginForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      const admin = new Admin(this.loginForm.value.id, this.loginForm.value.password);

      if (this.employeeService.validateAdmin(admin)) {
        alert('Login successful');
        this.router.navigate(['/homepage']);
      } else {
        alert('Invalid credentials');
      }
    }
  }
}
