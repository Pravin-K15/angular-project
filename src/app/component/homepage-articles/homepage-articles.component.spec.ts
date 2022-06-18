import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageArticlescomponent } from './homepage-articles.component';

describe('HomepageArticlescomponents', () => {
  let component: HomepageArticlescomponent;
  let fixture: ComponentFixture<HomepageArticlescomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageArticlescomponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageArticlescomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
