import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlbumsComponentComponent } from './list-albums-component.component';

describe('ListAlbumsComponentComponent', () => {
  let component: ListAlbumsComponentComponent;
  let fixture: ComponentFixture<ListAlbumsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAlbumsComponentComponent]
    });
    fixture = TestBed.createComponent(ListAlbumsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
