import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageGalleryComponent } from './homepage-gallery.component';

describe('HomepageGalleryComponent', () => {
  let component: HomepageGalleryComponent;
  let fixture: ComponentFixture<HomepageGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
