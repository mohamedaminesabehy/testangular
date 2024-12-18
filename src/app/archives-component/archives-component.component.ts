import { Component } from '@angular/core';
import { Album } from '../model/Album';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-archives-component',
  templateUrl: './archives-component.component.html',
  styleUrls: ['./archives-component.component.css']
})
export class ArchivesComponentComponent {
  archives: any;
  constructor(private albumService: AlbumService) {}
  ngOnInit(): void {
  
      this.albumService.getAlbum().subscribe((data) => {
        this.archives = data.find(album => album.archived = 1);
      });
    }
  }

