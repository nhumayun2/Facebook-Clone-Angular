import { Component } from '@angular/core';
import { NavBarComponent } from '../Repeted-Elements/Nav-bar/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { Video } from '../models/interfaces/video';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [NavBarComponent, CommonModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {

  videos: Video[] = [
    {
      id: 1,
      title: 'Amazing Nature Documentary - Wildlife in 4K',
      uploader: 'Nature Explorers',
      uploaderImage: 'images/profilePic.jpg',
      thumbnailUrl: 'https://via.placeholder.com/400x225/4CAF50/FFFFFF?text=Nature+Video',
      videoUrl: '#',
      views: '1.2M views',
      uploadTime: '2 days ago',
      duration: '15:30'
    },
    {
      id: 2,
      title: 'Cooking Tutorial: Perfect Pasta Recipe',
      uploader: 'Chef Masters',
      uploaderImage: 'images/profilePic.jpg',
      thumbnailUrl: 'https://via.placeholder.com/400x225/FF9800/FFFFFF?text=Cooking+Video',
      videoUrl: '#',
      views: '850K views',
      uploadTime: '5 days ago',
      duration: '10:45'
    },
    {
      id: 3,
      title: 'Tech Review: Latest Smartphone Features',
      uploader: 'Tech Insights',
      uploaderImage: 'images/profilePic.jpg',
      thumbnailUrl: 'https://via.placeholder.com/400x225/2196F3/FFFFFF?text=Tech+Review',
      videoUrl: '#',
      views: '2.5M views',
      uploadTime: '1 week ago',
      duration: '12:20'
    },
    {
      id: 4,
      title: 'Fitness Workout: Full Body Training',
      uploader: 'Fitness Pro',
      uploaderImage: 'images/profilePic.jpg',
      thumbnailUrl: 'https://via.placeholder.com/400x225/F44336/FFFFFF?text=Fitness+Video',
      videoUrl: '#',
      views: '500K views',
      uploadTime: '3 days ago',
      duration: '20:15'
    },
    {
      id: 5,
      title: 'Travel Vlog: Exploring Ancient Ruins',
      uploader: 'Travel Diaries',
      uploaderImage: 'images/profilePic.jpg',
      thumbnailUrl: 'https://via.placeholder.com/400x225/9C27B0/FFFFFF?text=Travel+Vlog',
      videoUrl: '#',
      views: '1.8M views',
      uploadTime: '1 day ago',
      duration: '18:50'
    },
    {
      id: 6,
      title: 'Music Performance: Live Concert Highlights',
      uploader: 'Music World',
      uploaderImage: 'images/profilePic.jpg',
      thumbnailUrl: 'https://via.placeholder.com/400x225/E91E63/FFFFFF?text=Music+Video',
      videoUrl: '#',
      views: '3.2M views',
      uploadTime: '4 days ago',
      duration: '25:00'
    },
    {
      id: 7,
      title: 'Gaming Stream: Epic Battle Royale',
      uploader: 'Pro Gamer',
      uploaderImage: 'images/profilePic.jpg',
      thumbnailUrl: 'https://via.placeholder.com/400x225/673AB7/FFFFFF?text=Gaming+Stream',
      videoUrl: '#',
      views: '950K views',
      uploadTime: '6 hours ago',
      duration: '45:30'
    },
    {
      id: 8,
      title: 'DIY Project: Home Renovation Ideas',
      uploader: 'DIY Experts',
      uploaderImage: 'images/profilePic.jpg',
      thumbnailUrl: 'https://via.placeholder.com/400x225/795548/FFFFFF?text=DIY+Project',
      videoUrl: '#',
      views: '620K views',
      uploadTime: '2 weeks ago',
      duration: '14:25'
    }
  ];

}
