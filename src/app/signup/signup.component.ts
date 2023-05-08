import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Admin } from '../admin.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private router: Router, private employeeService: EmployeeService) {
    this.signupForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.signupForm.valid) {
      const newAdmin = new Admin(this.signupForm.value.id, this.signupForm.value.password);

      if (this.employeeService.validateAdmin(newAdmin)) {
        alert('Admin already exists');
      } else {
        this.employeeService.addAdmin(newAdmin);
        alert('Admin created successfully');
        this.router.navigate(['/login']);
      }
    }
  }
}
