import type { StaticImageData } from "next/image";
// Wikimedia Commons credits:
// malaga.jpeg: "Da Gibralfaro (cropped).jpg" by Kiban, CC BY-SA 3.0
// tapas.jpeg: "Madrid-Plaza Mayor-Tapas bar.jpg", CC BY 2.0
// oel.jpeg: "Boquerones y cañas en Sevilla.jpg", CC BY 2.0 (cropped)
// pimpi.jpeg: "El Pimpi Málaga 3.jpg", CC BY-SA 2.0
import malaga from "./images/malaga.jpeg";
import tapas from "./images/tapas.jpeg";
import oel from "./images/oel.jpeg";
import pimpi from "./images/pimpi.jpeg";
import padron from "./images/padron.jpeg";
import vermut from "./images/vermut.jpeg";
import cana from "./images/cana.jpeg";
import vinprovning from "./images/vinprovning.jpeg";

export type Question = {
  question: string;
  image?: StaticImageData;
  imageAlt?: string;
  options: string[];
  correctIndex: number;
};

export const PRIZE_IMAGE = vinprovning;

export const QUESTIONS: Question[] = [
  {
    question:
      "Ordet tapas kommer från spanskans 'tapa' – och sägs komma från att barerna förr la något över vinglaset för att hålla flugorna borta. Vad betyder ordet?",
    image: tapas,
    imageAlt: "En bardisk full med olika tapasrätter",
    options: [
      "En liten tallrik",
      "Ett lock",
      "En smakbit",
      "Ett mellanmål",
      "En delad rätt",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Vilket öl är Málagas stolthet, bryggt i staden sedan 1928 med sloganen 'Malagueña y exquisita'?",
    image: oel,
    imageAlt: "Två glas öl och en tapastallrik på ett bord utanför en spansk bar",
    options: [
      "Cruzcampo",
      "Mahou",
      "Estrella Galicia",
      "Victoria",
      "Alhambra",
    ],
    correctIndex: 3,
  },
  {
    question: "Vilken världsberömd konstnär föddes i Málaga år 1881?",
    image: malaga,
    imageAlt: "Panoramavy över Málaga med hamnen och katedralen",
    options: [
      "Salvador Dalí",
      "Pablo Picasso",
      "Joan Miró",
      "Francisco Goya",
      "Diego Velázquez",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Málagas mest berömda bar, El Pimpi, har en världskänd Hollywoodskådespelare – född i Málaga – som delägare. Vem?",
    image: pimpi,
    imageAlt: "Entrén till Bodega Bar El Pimpi i Málaga",
    options: [
      "Javier Bardem",
      "Pedro Almodóvar",
      "Penélope Cruz",
      "Enrique Iglesias",
      "Antonio Banderas",
    ],
    correctIndex: 4,
  },
  {
    question:
      "Detta är Oskars favoritsnacks i Málaga, vad heter denna tapas?",
    image: padron,
    imageAlt: "En skål med gröna stekta paprikor med flingsalt",
    options: [
      "Patatas bravas",
      "Gambas al ajillo",
      "Pimientos de Padrón",
      "Croquetas de espinacas",
      "Aceitunas fritas",
    ],
    correctIndex: 2,
  },
  {
    question:
      "I södra Spanien är denna alkoholhaltiga dryck populär och är dessutom Oskars favorit att dricka när han snacksar på pimientos de padrón. Vad heter drycken?",
    image: vermut,
    imageAlt: "Ett glas med en mörk dryck, is och en citronskalsbit",
    options: ["Sangría", "Vermut", "Tinto de verano", "Sherry", "Rioja"],
    correctIndex: 1,
  },
  {
    question:
      "I Málaga är det populärt att köpa många små öl – de är ofta 200 ml stora och kostar 10–20 kr. Om du vill beställa en sån öl, hur säger du då på spanska?",
    image: cana,
    imageAlt: "En hand som håller ett litet ölglas",
    options: [
      "Una pinta, por favor",
      "Una jarra grande, por favor",
      "Un vaso de agua, por favor",
      "Una copa de vino, por favor",
      "Una caña, por favor",
    ],
    correctIndex: 4,
  },
];
