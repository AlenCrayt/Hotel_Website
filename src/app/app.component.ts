import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowcaseRowComponent } from './showcase-row/showcase-row.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewRowComponent } from './review-row/review-row.component';
import { HorizontalShowcaseComponent } from './horizontal-showcase/horizontal-showcase.component';
import { ThreeArticlesComponent } from './three-articles/three-articles.component';
import { ReserveFormComponent } from './reserve-form/reserve-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ShowcaseRowComponent, FooterComponent, ReviewRowComponent, HorizontalShowcaseComponent, ThreeArticlesComponent, ReserveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hotel_website';
}
