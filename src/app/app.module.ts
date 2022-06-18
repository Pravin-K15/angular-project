import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomepageGalleryComponent } from './components/homepage-gallery/homepage-gallery.component';
import { HomepageArticlescomponent } from './components/homepage-articles/homepage-articles.component';
import { ReadmoreComponent } from './components/readmore/readmore.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomepageComponent,
    HomepageGalleryComponent,
    HomepageArticlescomponent,
    ReadmoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
