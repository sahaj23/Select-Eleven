import { Component, OnInit } from "@angular/core";
import { Player } from "../players/player.model.";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"],
})
export class TeamComponent implements OnInit {
  team: Player[] = [];
  batsmen: Player[] = [];
  bowlers: Player[] = [];
  wickteKeeper: Player[] = [];
  allRounders: Player[] = [];
  constructor() {}

  ngOnInit() {
    this.team = JSON.parse(localStorage.getItem("team"));
    for (let i = 0; i < this.team.length; i++) {
      if (this.team[i].position === "Batsman") {
        this.batsmen.push(this.team[i]);
      } else if (this.team[i].position === "Bowler") {
        this.bowlers.push(this.team[i]);
      }
      if (this.team[i].position === "Wicketkeeper") {
        this.wickteKeeper.push(this.team[i]);
      }
      if (this.team[i].position === "All-rounder") {
        this.allRounders.push(this.team[i]);
      }
    }
    console.log("Batsmen: " + JSON.stringify(this.batsmen));
    console.log("Bowlers: " + JSON.stringify(this.bowlers));
  }
}
