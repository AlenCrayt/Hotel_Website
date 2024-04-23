import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-reserve-form',
  standalone: true,
  imports: [],
  templateUrl: './reserve-form.component.html',
  styleUrl: './reserve-form.component.css'
})
export class ReserveFormComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const the_form = document.querySelector("form")!

    the_form.addEventListener("submit", (event) => {
      event.preventDefault()
      //Start and end dates for the stay in the form are selected and declared as variables in the type of HTML Input Elements
      let start_date_input = document.querySelector("#inicio_estadia") as HTMLInputElement
      let end_date_input = document.querySelector("#fin_estadia") as HTMLInputElement

      //The values(strings) of the start and end date input variables are then converted into numeric dates which are able to be compared as numbers
      let start_date = new Date(start_date_input.value)
      let end_date = new Date(end_date_input.value)

      //Run a simple check to verify that the end date isn't before or on the same day as the start date
      if (end_date <= start_date) {
        this.renderer.addClass(the_form, "wrong_dates")
      }else {
        const form_data = new FormData(the_form)
        fetch("http://localhost/hotel_website_backend/index.php", {
          method: "POST",
          body: form_data
        })
        .then(() => {
          this.renderer.removeClass(the_form, "wrong_dates")
          this.renderer.addClass(document.querySelector("#notification"), "reserve_sent")
          setTimeout(() => {
            this.renderer.removeClass(document.querySelector("#notification"), "reserve_sent")
          }, 7000);
        })
      }
    })
  }
}
