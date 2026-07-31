import type { StaticImageData } from "next/image";
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
    question: "Vilken världsberömd konstnär föddes i Málaga år 1881?",
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
      "Vad heter den moriska borgen som ligger på höjden mitt i centrala Málaga?",
    options: [
      "Alhambra",
      "La Mezquita",
      "El Escorial",
      "Alcazaba",
      "Sagrada Família",
    ],
    correctIndex: 3,
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
