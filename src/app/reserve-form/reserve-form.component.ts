import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserve-form',
  standalone: true,
  imports: [],
  templateUrl: './reserve-form.component.html',
  styleUrl: './reserve-form.component.css'
})
export class ReserveFormComponent implements OnInit {
  ngOnInit(): void {
    const the_form = document.querySelector("form")!
    the_form.addEventListener("submit", (event) => {
      event.preventDefault()
      const form_data = new FormData(the_form)
      fetch("http://localhost/hotel_website_backend/index.php", {
        method: "POST",
        body: form_data
      })
      .then(Response => {
        alert("Reserva realizada exitosamente!")
      })
    })
  }
}
