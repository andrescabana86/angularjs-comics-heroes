import { Injectable } from '@angular/core'

@Injectable()
export class HeroesService {

  private heroes:any[] = 
  [
    {
      nombre: "Aquaman",
      photos: 'https://www.google.com.ar/search?q=aquaman&source=lnms&tbm=isch',
      wiki: 'https://es.wikipedia.org/wiki/aquaman',
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa:"DC"
    },
    {
      nombre: "Batman",
      photos: 'https://www.google.com.ar/search?q=batman&source=lnms&tbm=isch',
      wiki: 'https://es.wikipedia.org/wiki/batman',
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "assets/img/batman.png",
      aparicion: "1939-05-01",
      casa:"DC"
    },
    {
      nombre: "Daredevil",
      photos: 'https://www.google.com.ar/search?q=daredevil&source=lnms&tbm=isch',
      wiki: 'https://es.wikipedia.org/wiki/daredevil',
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
      img: "assets/img/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Hulk",
      photos: 'https://www.google.com.ar/search?q=hulk&source=lnms&tbm=isch',
      wiki: 'https://es.wikipedia.org/wiki/hulk',
      bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
      img: "assets/img/hulk.png",
      aparicion: "1962-05-01",
      casa:"Marvel"
    },
    {
      nombre: "Linterna Verde",
      photos: 'https://www.google.com.ar/search?q=greenlantern&source=lnms&tbm=isch',
      wiki: 'https://es.wikipedia.org/wiki/Linterna_Verde',
      bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
      img: "assets/img/linterna-verde.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Spider-Man",
      photos: 'https://www.google.com.ar/search?q=spiderman&source=lnms&tbm=isch',
      wiki: 'https://es.wikipedia.org/wiki/spiderman',
      bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
      img: "assets/img/spiderman.png",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Wolverine",
      photos: 'https://www.google.com.ar/search?q=wolverine&source=lnms&tbm=isch',
      wiki: 'https://es.wikipedia.org/wiki/wolverine',
      bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
      img: "assets/img/wolverine.png",
      aparicion: "1974-11-01",
      casa: "Marvel"
    }
  ]

  constructor() {}

  getHeroes(heroe:string) {
    if (heroe) {
      const regex = new RegExp(heroe, 'ig')
      return this.heroes.filter((heroe) => {
        return regex.test(heroe.nombre)
      })
    }
    return this.heroes;
  }
}
