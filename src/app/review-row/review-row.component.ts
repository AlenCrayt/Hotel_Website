import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Random } from 'random';

@Component({
  selector: 'app-review-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-row.component.html',
  styleUrl: './review-row.component.css'
})
export class ReviewRowComponent {
  //Declaracion de tres numeros aleatorios cada uno en un rango especifico de indices del array de objetos
  randy_1:Random = new Random()
  first_review_index:number = this.randy_1.int(0, 1)
  randy_2:Random = new Random()
  second_review_index:number = this.randy_2.int(2, 3)
  randy_3:Random = new Random()
  third_review_index:number = this.randy_3.int(4, 5)

  //Declaracion del array de objetos JS que es usado para llenar un articulo de reseña en la pagina
  review_list = [
    {
      reviewer_name: "Juan",
      portrait: "../../assets/guest_4.jpg",
      text_review: "Increíble experiencia en el Hotel Dos Cumbres. Desde el momento en que llegamos, nos recibieron con una cálida bienvenida y un servicio excepcional. Las habitaciones eran espaciosas y elegantes, con vistas impresionantes a las montañas. Disfrutamos especialmente de la deliciosa comida en el restaurante y de las diversas actividades ofrecidas por el hotel. Sin duda, volveremos en el futuro para otra estancia inolvidable."
    },
    {
      reviewer_name: "Tomas",
      portrait: "../../assets/guest_1.jpg",
      text_review: "Una estancia encantadora en el Hotel Dos Cumbres. El ambiente tranquilo y relajante del hotel nos permitió desconectar por completo. El personal fue amable y atento en todo momento, asegurándose de que nuestra experiencia fuera impecable. Las instalaciones del hotel, desde la piscina hasta el spa, estaban impecablemente mantenidas y ofrecían un verdadero lujo. Recomendamos este hotel a cualquiera que busque una escapada tranquila en medio de la naturaleza."
    },
    {
      reviewer_name: "Laura",
      portrait: "../../assets/guest_0.jpg",
      text_review: "Excepcional servicio en el Hotel Dos Cumbres. Nos quedamos impresionados por la atención al detalle y la hospitalidad del personal. Las habitaciones eran elegantes y cómodas, con todo lo que necesitábamos para una estancia relajante. La ubicación del hotel, rodeada de hermosas montañas, era simplemente impresionante. Definitivamente planeamos regresar en el futuro para disfrutar de más momentos memorables en este encantador hotel."
    },
    {
      reviewer_name: "Sandra",
      portrait: "../../assets/guest_2.jpg",
      text_review: "Una experiencia inolvidable en el Hotel Dos Cumbres. Desde el primer momento, nos sentimos como en casa gracias a la cálida bienvenida del personal. Las vistas desde nuestro balcón eran impresionantes, y pasamos horas admirando la belleza natural que nos rodeaba. La comida en el restaurante del hotel era deliciosa, con platos que destacaban por su frescura y sabor. Recomendamos encarecidamente este hotel a cualquiera que busque una escapada relajante en un entorno espectacular."
    },
    {
      reviewer_name: "Marcos",
      portrait: "../../assets/guest_3.jpg",
      text_review: "Fantástica escapada en el Hotel Dos Cumbres. Nos quedamos impresionados por la belleza y la serenidad de este lugar desde el momento en que llegamos. El personal fue extremadamente amable y servicial, asegurándose de que nuestra estancia fuera perfecta en todos los sentidos. Las instalaciones del hotel, desde la piscina hasta el spa, eran de primera clase y nos permitieron relajarnos y recargar energías. Definitivamente volveremos en el futuro para otra experiencia inolvidable en este hermoso hotel."
    },
    {
      reviewer_name: "Alberto",
      portrait: "../../assets/guest_5.jpg",
      text_review: "Una joya escondida en el Hotel Dos Cumbres. Nos sorprendió gratamente la belleza y la elegancia de este encantador hotel. Las habitaciones eran acogedoras y bien equipadas, con vistas impresionantes a las montañas. Disfrutamos especialmente de las actividades al aire libre ofrecidas por el hotel, que nos permitieron explorar la espectacular belleza natural de la región. El personal fue amable y atento en todo momento, asegurándose de que nuestra estancia fuera memorable. Sin duda, este hotel es un destino imperdible para aquellos que buscan una experiencia única en medio de la naturaleza."
    }
  ]
}