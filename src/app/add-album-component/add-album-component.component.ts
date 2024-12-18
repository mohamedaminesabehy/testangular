import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-add-album-component',
  templateUrl: './add-album-component.component.html',
  styleUrls: ['./add-album-component.component.css']
})
export class AddAlbumComponentComponent {
  album = {
    id: '',
    title: '',
    creationDate:new Date(),
    archived:0,
    coverPicture:''
  };
  
  constructor(private albumservice: AlbumService) {}
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.album.creationDate=new Date();
      this.albumservice.addAlbum(this.album).subscribe(
        (data) => {
          console.log('album ajouté :', data);
          form.reset(); 
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du menu :', error);
        }
      );
    }
  }}

