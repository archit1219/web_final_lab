import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent implements OnInit {
  posts: any[] = [];
  users: any[] = [];
  comments: any[] = [];
  selectedDataType: string = 'posts';
  isLoading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadData('posts');
  }

  loadData(type: string) {
    this.isLoading = true;
    this.selectedDataType = type;

    switch (type) {
      case 'posts':
        this.apiService.getPosts().subscribe(data => {
          this.posts = data;
          this.isLoading = false;
        });
        break;
      case 'users':
        this.apiService.getUsers().subscribe(data => {
          this.users = data;
          this.isLoading = false;
        });
        break;
      case 'comments':
        this.apiService.getComments().subscribe(data => {
          this.comments = data;
          this.isLoading = false;
        });
        break;
    }
  }
}
