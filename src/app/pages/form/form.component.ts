import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  feedbackForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      rating: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    if (this.feedbackForm.valid) {
      console.log('Form submitted:', this.feedbackForm.value);
      // Here you would typically send the form data to your backend
      alert('Thank you for your feedback!');
      this.feedbackForm.reset();
      this.submitted = false;
    }
  }

  get f() {
    return this.feedbackForm.controls;
  }
}
