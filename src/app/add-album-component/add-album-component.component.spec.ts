import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlbumComponentComponent } from './add-album-component.component';

describe('AddAlbumComponentComponent', () => {
  let component: AddAlbumComponentComponent;
  let fixture: ComponentFixture<AddAlbumComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAlbumComponentComponent]
    });
    fixture = TestBed.createComponent(AddAlbumComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
