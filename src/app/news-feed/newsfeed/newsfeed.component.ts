import { Component } from '@angular/core';
import { NavBarComponent } from "../../Repeted-Elements/Nav-bar/nav-bar/nav-bar.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreatePost } from '../../models/interfaces/create-post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-newsfeed',
  standalone: true,
  imports: [NavBarComponent,CommonModule, FormsModule, RouterLink],
  templateUrl: './newsfeed.component.html',
  styleUrl: './newsfeed.component.css'
})
export class NewsfeedComponent {

  title = 'News Feed';
  
  currentInput = '';

  currentPost : CreatePost = {
    description: '',
    time: ''
  };

  allPostList : CreatePost[] = [
    {description: 'What is Global Change?', time: '2 hours ago'},
    {description: 'Why coding makes back hurts?', time: '3 hours ago'},
  ];


  facebookPosts = [
    {
      description: 'This is news 1',
      time: '2 hours ago'
    },
    {
      description: 'This is news 2',
      time: '3 hours ago'
    }
  ];

  constructor() {

   }

   isCreatePostModalOpen = false;

  openCreatePostModal(inputField: HTMLInputElement) {
    this.isCreatePostModalOpen = true;
  }

  closeCreatePostModal() {
    this.isCreatePostModalOpen = false;
  }

  createPost() {
    // Logic to handle post creation
    this.currentPost.time = new Date().toLocaleString();
    this.allPostList.push(this.currentPost);
    console.log(this.allPostList);
    this.closeCreatePostModal(); // Close the modal after creating the post
    //this.emptyPost(); // Empty the post after creating the post
    this.currentInput = '';
  }

  emptyPost(){
    this.currentPost.description = '';
    this.currentPost.time = '';
  }

}
