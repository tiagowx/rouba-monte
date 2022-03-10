import { ICard } from "../interfaces/models/cards";

export class Deck {
  cards: ICard[];
  constructor(n: number) {
    let _cards: ICard[] = [];
    let _n = n;

    do {
      // set clubs cards
      for (let i = 1; i <= 13; i++) {
        switch (i) {
          case 1:
            _cards.push({ suit: "clubs", value: 'A' });
            break;
          case 11:
            _cards.push({ suit: "clubs", value: 'J' });
            break;
          case 12:
            _cards.push({ suit: "clubs", value: 'Q' });
            break;
          case 13:
            _cards.push({ suit: "clubs", value: 'K' });
            break;
          default:
            _cards.push({ suit: "clubs", value: `${i}` });
            break;
        }
      }

      // set diams _cards
      for (let i = 1; i <= 13; i++) {
        switch (i) {
          case 1:
            _cards.push({ suit: "diams", value: 'A' });
            break;
          case 11:
            _cards.push({ suit: "diams", value: 'J' });
            break;
          case 12:
            _cards.push({ suit: "diams", value: 'Q' });
            break;
          case 13:
            _cards.push({ suit: "diams", value: 'K' });
            break;
          default:
            _cards.push({ suit: "diams", value: `${i}` });
            break;
        }
      }

      // set hearts _cards
      for (let i = 1; i <= 13; i++) {
        switch (i) {
          case 1:
            _cards.push({ suit: "hearts", value: 'A' });
            break;
          case 11:
            _cards.push({ suit: "hearts", value: 'J' });
            break;
          case 12:
            _cards.push({ suit: "hearts", value: 'Q' });
            break;
          case 13:
            _cards.push({ suit: "hearts", value: 'K' });
            break;
          default:
            _cards.push({ suit: "hearts", value: `${i}` });
            break;
        }
      }

      // set spades _cards
      for (let i = 1; i <= 13; i++) {
        switch (i) {
          case 1:
            _cards.push({ suit: "spades", value: 'A' });
            break;
          case 11:
            _cards.push({ suit: "spades", value: 'J' });
            break;
          case 12:
            _cards.push({ suit: "spades", value: 'Q' });
            break;
          case 13:
            _cards.push({ suit: "spades", value: 'K' });
            break;
          default:
            _cards.push({ suit: "spades", value: `${i}` });
            break;
        }
      }
      _n--;
    } while (_n > 0)

    this.cards = _cards;
  }
}