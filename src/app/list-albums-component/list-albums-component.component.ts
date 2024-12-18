import { Component } from '@angular/core';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-list-albums-component',
  templateUrl: './list-albums-component.component.html',
  styleUrls: ['./list-albums-component.component.css']
})
export class ListAlbumsComponentComponent {

  albums: any[] = []; // Tableau pour stocker les menus
  
  constructor(private albumservice: AlbumService) {}
 
  ngOnInit(): void {
   
   this.albumservice.getAlbum().subscribe(
     (data) => {
       this.albums = data; 
         console.log('Menus récupérés :', this.albums);
    },
      (error) => {
        console.error('Erreur lors de la récupération des menus :', error);
     }
);
  }
  deleteAlbum(): void {
  //  if (confirm('Êtes-vous sûr de vouloir supprimer ce menu ?')) {
  //    this.albumservice.deleteAlbum(this.albums.id).subscribe(() => {
   //     alert('album supprimé avec succès !');
   //     window.location.reload(); 
//}, error => {
   //     console.error('Erreur lors de la suppression du albim', error);
   //     alert('Une erreur est survenue lors de la suppression du album.');
    //  });
    //}
  //}
  }
}


