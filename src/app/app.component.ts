import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowcaseRowComponent } from './showcase-row/showcase-row.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewRowComponent } from './review-row/review-row.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ShowcaseRowComponent, FooterComponent, ReviewRowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hotel_website';
}
