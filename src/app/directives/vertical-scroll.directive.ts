import { Directive, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appVerticalScroll]',
  standalone: true
})
export class VerticalScrollDirective implements OnInit {
  private observer!: IntersectionObserver
  constructor(private renderer: Renderer2) { }

  //Void function that takes in an HTML element specifically picked out, it proceeds to instance an Intersection Obsever which will observe the HTML element
  public observing_function(target: Element): void {
    //Setting up specific options for the observer to be instanced, it will trigger the isIntersecting property halfway through due to it's 0.5 threshold
    const options = {
      rootMarging: "0px",
      threshold: 0.5,
    }
    //Instanced observer checks the first entry only to check if it's intersecting and proceeds to add a class to it and make it visible if that's the case
    this.observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        this.renderer.addClass(target, "in_view")
        this.renderer.setStyle(target, "visibility", "visible")
      }
    }, options)
    this.observer.observe(target)
  }
  //Calls the observing_funtion three times for three specific HTML elements identified by their IDs to apply the class and it's animations to it
  //Done in ngOnInit since in order to identify the elements via attributes when the data is loaded in rather than before that outside of ngOnInit as this will result in a null return
  ngOnInit(): void {
    this.observing_function(document.querySelector("#resenias")!)
    this.observing_function(document.querySelector("#horizontal_showcase")!)
    this.observing_function(document.querySelector("#generic_articles")!)
  }
}
