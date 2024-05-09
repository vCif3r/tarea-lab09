import { Component } from '@angular/core';
import { CardComponent } from '../components/card/card.component';
import { IPelicula } from '../models/pelicula.model';

@Component({
  selector: 'app-lista-peliculas',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './lista-peliculas.component.html',
  styleUrl: './lista-peliculas.component.css'
})
export class ListaPeliculasComponent {

  peliculas: IPelicula[] = [
    {
      name: 'DEADPOOL & WOLVERINE',
      img: 'https://assets.dev-filo.dift.io/img/2024/04/22/DEADPOOL_WOLVERINE8350_.jpg',
      description: 'Wolverine se recupera de sus heridas cuando se cruza con Deadpool, que ha viajado en el tiempo para curarlo con la esperanza de hacerse amigos y formar un equipo para acabar con un enemigo común',
    },
    {
      name: 'JOKER 2: FOLIE À DEUX',
      img: 'https://www.infobae.com/new-resizer/K-xUP9sPJ_-itOoiOr9PCGkYo_U=/992x1323/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/Z3VGHPKH7JFWRFSDIZZROALSZQ.jpg',
      description: 'Secuela de Guasón (Joker, 2019). Dirigida nuevamente por Todd Phillips, Joaquin Phoenix vuelve como Arthur Fleck y Lady Gaga se suma al elenco como Harley Quinn.',
    },
    {
      name: 'HACHIKO 2: SIEMPRE A TU LADO',
      img: 'https://caracoltv.brightspotcdn.com/dims4/default/1c6a8a1/2147483647/strip/true/crop/808x1024+0+0/resize/808x1024!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2Fe0%2F32%2Fc21f64624b00a367e3eeb677490d%2Fhachiko-2.jpg',
      description: 'Hachiko es un perro de origen japonés y raza Akita, al que encuentra abandonado en una estación. Como nadie lo reclama, el profesor Chen se lo lleva a su casa. Con el paso del tiempo, va descubriendo entonces los entrañables lazos que pueden unir a una persona y a un animal”',
    },
    {
      name: 'EL PLANETA DE LOS SIMIOS NUEVO REINO',
      img: 'https://es.web.img3.acsta.net/pictures/24/02/12/14/09/5012504.jpg',
      description: 'El director Wes Ball le da nueva vida a la épica franquicia global situada varias generaciones en el futuro tras el reinado de César, en el que los simios son la especie dominante que vive en armonía y los humanos han quedado reducidos a vivir en las sombras.',
    },
    {
      name: 'VAGUITO',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2fieYiiwPEnsD1zqZ8lxTPZRM6UHcz3AvVxSgeRIy0A&s',
      description: 'Vaguito, un perro abandonado es rescatado por Pancho un dirigente honesto de una asociación pesquera. Pancho se encuentra enfrentado a una mafia de pescadores y su lucha por impartir justicia desencadenará junto a Vaguito, una serie de eventos por lo que será víctima de una traición en alta mar.',
    },
    {
      name: 'TRANSFORMERS: 40TH ANNIVERSARY EVENT',
      img: 'https://dx35vtwkllhj9.cloudfront.net/trafalgarreleasing/transformers-40th-anniversary-event/images/regions/intl/onesheet.jpg',
      description: 'Vive los dibujos originales del sábado por la mañana por primera vez en pantalla grande y revive su evolución a lo largo de los años con un adelanto de la nueva temporada de Transformers: Chispa de tierra.',
    },
    {
      name: 'ALIEN: ROMULUS',
      img: 'https://m.media-amazon.com/images/M/MV5BYWI1YzdlZTUtNzExYi00MmYxLTg5OWUtNzhkMDhhOWMwM2Y5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
      description: 'Este thriller de ciencia ficción y terror vuelve a las raíces de la exitosa franquicia ALIEN: Mientras exploran en las profundidades de una estación espacial abandonada, un grupo de jóvenes colonizadores del espacio se encuentra cara a cara con la forma de vida más aterradora del universo.',
    }
  ];
}


