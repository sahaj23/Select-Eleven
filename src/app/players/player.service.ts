import { Player } from "./player.model.";
import { OnInit } from "@angular/core";

export class PlayerService {
  players: Player[] = [];
  constructor() {
    const rohit: Player = {
      id: "1",
      name: "Rohit Sharma",
      description: "Agressive opening batsman",
      matches: "210",
      position: "Batsman",
      runs: "9140",
      battingStrikeRate: "94.50",
      imagePath: "https://i.cricketcb.com/stats/img/faceImages/576.jpg",
      detailImagePath:
        "https://www.mykhel.com/img/2018/11/rohitsharma-cropped_fg3ec7qrkgv1b6j0scq9o1gr.jpg",
      strength: "Pull shot, big hitting",
      weakness: "Swinging deliveries",
      suitability: "Flat tracks and short-pitch bowling",
      teamImagePath:
        "https://playerimages.platform.bcci.tv/generic/500x640/107.png",
    };
    this.players.push(rohit);

    const shikhar: Player = {
      id: "2",
      name: "Shikhar Dhawan",
      description: "Dynamic southpaw",
      matches: "123",
      position: "Batsman",
      runs: "5430",
      battingStrikeRate: "91.50",
      imagePath:
        "https://m.cricbuzz.com/a/img/v1/192x192/i1/c170660/shikhar-dhawan.jpg",
      detailImagePath:
        "https://www.mykhel.com/img/2018/11/shikhardhawan-cropped_qap7ds7jk2oq1hpapr3kslhmr.jpg",
      strength: "Playing on the up, full length deliveries",
      weakness: "Inability to score 100s",
      suitability: "Strike rate",
      teamImagePath:
        "https://www.mwallpapers.com/photos/celebrities/shikhar-dhawan/shikhar-dhawan-hd-wallpapersimages-1080p-of0o2e.jpg?v=1576487069",
    };
    this.players.push(shikhar);
    const virat: Player = {
      id: "3",
      name: "Virat Kohli",
      description: "Run machine",
      matches: "235",
      position: "Batsman",
      runs: "12342",
      battingStrikeRate: "93.50",
      imagePath:
        "https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg",
      detailImagePath:
        "https://www.mykhel.com/img/2018/10/viratkohli-cropped_enb1383spzof1285xkhtckgld.jpg",
      strength: "Consistentcy, running between the wickts",
      weakness: "Out-swinging deliveries",
      suitability: "Facing old ball",
      teamImagePath:
        "https://image.winudf.com/v2/image1/Y29tLnZpcmF0a3BobGk0a3dhbGxwYXBlckhEMjAxOS52aXJhdGtvaGxpd2FsbHBhcGVyZnVsbEhEX3NjcmVlbl8wXzE1NzExNjIxMTJfMDYx/screen-0.jpg?fakeurl=1&type=.jpg",
    };
    this.players.push(virat);
    const rahane: Player = {
      id: "4",
      name: "Ajinkya Rahane",
      description: "Overseas specialist",
      matches: "123",
      position: "Batsman",
      runs: "3213",
      battingStrikeRate: "84.50",
      imagePath:
        "https://m.cricbuzz.com/a/img/v1/192x192/i1/c171082/ajinkya-rahane.jpg",
      detailImagePath:
        "https://www.mykhel.com/img/2018/11/rahane-1541261122.jpg",
      strength: "Green surface",
      weakness: "Spin",
      suitability: "Overseas",
      teamImagePath: "https://www.mwallpapers.com/download-image/29607/676x901",
    };
    this.players.push(rahane);

    const yuvraj: Player = {
      id: "5",
      name: "Yuvraj Singh",
      description: "Big hitter",
      matches: "321",
      position: "Batsman",
      runs: "10232",
      battingStrikeRate: "89.50",
      imagePath: "https://i.cricketcb.com/stats/img/faceImages/69.jpg",
      detailImagePath:
        "https://www.mykhel.com/img/2017/01/yuvrajsingh-150-cuttack-eng-600-20-1484888776.jpg",
      strength: "Spin and fast non-swinging bowling",
      weakness: "Swing deliveries",
      suitability: "Flat tracks ",
      teamImagePath:
        "https://www1.pictures.zimbio.com/gi/2011+ICC+World+Cup+India+Portrait+Session+9SG6qOYJ8Arx.jpg",
    };
    this.players.push(yuvraj);
    const dhoni: Player = {
      id: "6",
      name: "Mahendra Singh Dhoni",
      description: "Captain and finisher",
      matches: "329",
      position: "Wicketkeeper",
      runs: "9987",
      battingStrikeRate: "96.50",
      imagePath: "https://i.cricketcb.com/stats/img/faceImages/265.jpg",
      detailImagePath:
        "https://www.mykhel.com/img/2018/10/ms-dhoni-batting-13123-1540652231.jpg",
      strength: "Cool as a cucumber, finisher and stumping",
      weakness: "Strike rate",
      suitability: "Spinning tracks",
      teamImagePath:
        "https://i.pinimg.com/474x/13/9d/7b/139d7b990107e1bea4f22f4acb3cf86e.jpg",
    };
    this.players.push(dhoni);
    const hardik: Player = {
      id: "7",
      name: "Hardik Pandya",
      description: "Fast bowling all-rounder",
      matches: "35",
      position: "All-rounder",
      runs: "1539",
      battingStrikeRate: "114.50",
      bowlingStrikeRate: "45.31",
      economyRate: "5.69",
      wickets: "42",
      imagePath: "https://www.cricbuzz.com/stats/img/faceImages/9647.jpg",
      detailImagePath:
        "https://www.mykhel.com/img/2017/09/hardikpandya-26-1506415456.jpg",
      strength: "Big hitting",
      weakness: "Economy rate",
      suitability: "Sub-continent conditions",
      teamImagePath:
        "https://images-na.ssl-images-amazon.com/images/I/81idzPvwG8L._SL1500_.jpg",
    };
    this.players.push(hardik);

    const bhuvneshwar: Player = {
      id: "8",
      name: "Bhuvneshwar Kumar",
      description: "Medium fast swing bowler",
      matches: "97",
      position: "Bowler",
      wickets: "113",
      bowlingStrikeRate: "37.53",
      economyRate: "5.72",
      imagePath:
        "https://m.cricbuzz.com/a/img/v1/192x192/i1/c170689/bhuvneshwar-kumar.jpg",
      detailImagePath:
        "https://www.mykhel.com/img/2017/10/bhuvneshwar-kumar-celebrates-26-1508999588.jpg",
      strength: "Inswing and Outswing",
      weakness: "Lack of mixture",
      suitability: "Swinging conditions",
      teamImagePath:
        "https://www.mwallpapers.com/photos/sports/bhuvneshwar-kumar/bhuvneshwar-kumar-best-hd-photos-1080p-wdf3qt.jpg?v=1576487133",
    };
    this.players.push(bhuvneshwar);
    const shami: Player = {
      id: "9",
      name: "Mohammad Shami",
      description: "Hit the deck fast bowler",
      matches: "85",
      position: "Bowler",
      wickets: "121",
      bowlingStrikeRate: "33.43",
      economyRate: "5.57",
      imagePath:
        "https://m.cricbuzz.com/a/img/v1/192x192/i1/c170684/mohammed-shami.jpg",
      detailImagePath:
        "https://i.pinimg.com/originals/09/e3/e2/09e3e2ad17caf076dd47ac0316a625d1.jpg",
      strength: "Pace and hit the deck",
      weakness: "Economy rate",
      suitability: "Bouncy tracks",
      teamImagePath: "https://p.imgci.com/db/PICTURES/CMS/193300/193353.2.jpg",
    };
    this.players.push(shami);
    const bumrah: Player = {
      id: "10",
      name: "Jasprit Bumrah",
      description: "Death bowling specialist, good yorkers",
      matches: "73",
      position: "Bowler",
      wickets: "125",
      bowlingStrikeRate: "29.54",
      economyRate: "5.11",
      imagePath:
        "https://m.cricbuzz.com/a/img/v1/192x192/i1/c170685/jasprit-bumrah.jpg",
      detailImagePath:
        "https://www.mykhel.com/img/2018/07/jaspritbumrah-cropped_780ivdgifmhd1kbe2vi5wsttu.jpg",
      strength: "Yorkers and pace",
      weakness: "Lack of swing",
      suitability: "Fast tracks where ball skids",
      teamImagePath:
        "https://www.forbesindia.com/media/images/2018/Feb/img_103335_jasprit_bumrah.jpg",
    };
    this.players.push(bumrah);

    const chahal: Player = {
      id: "11",
      name: "Yuzvendra Chahal",
      description: "Right arm leggie",
      matches: "41",
      position: "Bowler",
      wickets: "63",
      bowlingStrikeRate: "38.40",
      economyRate: "5.53",
      imagePath:
        "https://m.cricbuzz.com/a/img/v1/192x192/i1/c170690/yuzvendra-chahal.jpg",
      detailImagePath:
        "https://www.mykhel.com/img/2018/11/yuzvender-chahal-bowling-1541944956.jpg",
      strength: "Control on the ball",
      weakness: "Lack of mixture",
      suitability: "Spinning wicket",
      teamImagePath:
        "https://i.pinimg.com/474x/dd/12/56/dd12562baa1174a80e742e18c8d17e61.jpg",
    };
    this.players.push(chahal);
    const kuldeep: Player = {
      id: "12",
      name: "Kuldeep Yadav",
      description: "Chinaman spinner",
      matches: "37",
      position: "Bowler",
      wickets: "61",
      battingStrikeRate: "36.20",
      economyRate: "5.73",
      imagePath: "https://www.cricbuzz.com/stats/img/faceImages/8292.jpg",
      detailImagePath:
        "https://www.mykhel.com/img/2018/07/kuldeepyadav-1531455881.jpg",
      strength: "Action difficult to read",
      weakness: "Higher economy rate in small grounds",
      suitability: "Big stadiums",
      teamImagePath: "https://wallpapercave.com/wp/wp5448929.jpg",
    };
    this.players.push(kuldeep);
  }

  getPlayers(): Player[] {
    return this.players.slice();
  }

  getPlayer(id: number): Player {
    return this.players[id];
  }
}
