import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlbumComponentComponent } from './add-album-component/add-album-component.component';
import { ArchivesComponentComponent } from './archives-component/archives-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListAlbumsComponentComponent } from './list-albums-component/list-albums-component.component';

const routes: Routes = [
  {path:'',component:HomeComponentComponent},
  {path:'albums',component:ListAlbumsComponentComponent},
  {path:'archives',component:ArchivesComponentComponent},
  {path:'addalbum',component:AddAlbumComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
