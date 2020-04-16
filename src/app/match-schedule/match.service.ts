import { Match } from "./match.model";

export class MatchService {
  matches: Match[] = [];
  prevMatches: Match[] = [];
  constructor() {
    this.matches.push({
      happened: false,
      id: "1",
      bcciImagePath:
        "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
      oppositionImagePath:
        "https://qph.fs.quoracdn.net/main-qimg-e773213039285b9bd02bc35cdbf622dd.webp",
      stadiumImagePath:
        "https://www.royalchallengers.com/PRRCB01/public/2020-03/chinnaswamystadium_1.jpg",
      match: "1st ODI",
      series: "Paytm Series",
      opposition: "Pakistan",
      venue: "Chinnaswammy Stadium, Bangalore",
      date: "23 June, 2020",
      time: "2:30 PM",
      umpires: "Aleem Dar and Marais Erasmus",
    });

    this.matches.push({
      happened: false,
      id: "2",
      bcciImagePath:
        "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
      oppositionImagePath:
        "https://qph.fs.quoracdn.net/main-qimg-e773213039285b9bd02bc35cdbf622dd.webp",
      stadiumImagePath:
        // tslint:disable-next-line: max-line-length
        "https://www.crictracker.com/wp-content/uploads/2019/10/Wankhede-Stadium.jpg",
      match: "2nd ODI",
      series: "Paytm Series",
      opposition: "Pakistan",
      venue: "Wankhede Stadium, Mumbai",
      date: "26 June, 2020",
      time: "2:30 PM",
      umpires: "Kumar Dharmsena and Marais Erasmus",
    });

    this.matches.push({
      happened: false,
      id: "3",
      bcciImagePath:
        "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
      oppositionImagePath:
        "https://qph.fs.quoracdn.net/main-qimg-e773213039285b9bd02bc35cdbf622dd.webp",
      stadiumImagePath:
        "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/01/holkar-1578324565.jpg",
      match: "3rd ODI",
      series: "Paytm Series",
      opposition: "Pakistan",
      venue: "Holkar stadium, Indore",
      date: "30 June, 2020",
      time: "9:30 AM",
      umpires: "Aleem Dar and Marais Erasmus",
    });

    this.prevMatches.push({
      happened: true,
      id: "4",
      bcciImagePath:
        "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
      oppositionImagePath:
        "https://sportyace.com/wp-content/uploads/2019/05/Cricket-Australia.png",
      stadiumImagePath:
        "https://www.royalchallengers.com/PRRCB01/public/2020-03/chinnaswamystadium_1.jpg",
      match: "1st Test",
      series: "Border Gavaskar trophy",
      opposition: "Australia",
      venue: "Chinnaswammy Stadium, Bangalore",
      date: "17-21 March, 2020",
      winner: "India",
      toss: "Australia",
    });

    this.prevMatches.push({
      happened: true,
      id: "5",
      bcciImagePath:
        "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
      oppositionImagePath:
        "https://sportyace.com/wp-content/uploads/2019/05/Cricket-Australia.png",
      stadiumImagePath:
        "https://www.crictracker.com/wp-content/uploads/2019/10/Wankhede-Stadium.jpg",
      match: "1st Test",
      series: "Border Gavaskar trophy",
      opposition: "Australia",
      venue: "Wankhede Stadium, Mumbai",
      date: "17-21 March, 2020",
      winner: "India",
      toss: "India",
    });
  }

  getMatches() {
    return this.matches.slice();
  }
  getPrevMatches() {
    return this.prevMatches.slice();
  }
}
