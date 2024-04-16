import { Directive, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appVerticalScroll]',
  standalone: true
})
export class VerticalScrollDirective implements OnInit {
  constructor(private renderer: Renderer2) { }

  //Void function that takes in an HTML element specifically picked out, it proceeds to instance an Intersection Obsever which will observe the HTML element
  public observing_function(target: Element): void {
    //Instanced observer checks the first entry only to check if it's intersecting and proceeds to add a class to it and make it visible if that's the case, it then proceeds to disconnect the observer as it's no longer needed
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        this.renderer.addClass(target, "in_view")
        this.renderer.setStyle(target, "visibility", "visible")
        observer.disconnect()
      }//With a threshold of 0.5 the animation and the element becoming visible will trigger halfway throught the view into the element
    }, {threshold : 0.5})
    observer.observe(target);
  }

  //Calls the observing_funtion three times for three specific HTML elements identified by their IDs to apply the class and it's animations to it
  //Done in ngOnInit since in order to identify the elements via attributes when the data is loaded in rather than before that outside of ngOnInit as this will result in a null return
  ngOnInit(): void {
    this.observing_function(document.querySelector("#resenias")!)
    this.observing_function(document.querySelector("#horizontal_showcase")!)
    this.observing_function(document.querySelector("#generic_articles")!)
  }
}