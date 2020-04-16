import { Component, OnInit } from "@angular/core";
import { MatchService } from "./match.service";
import { Match } from "./match.model";

@Component({
  selector: "app-match-schedule",
  templateUrl: "./match-schedule.component.html",
  styleUrls: ["./match-schedule.component.css"],
})
export class MatchScheduleComponent implements OnInit {
  matches: Match[] = [];
  prevMatches: Match[] = [];
  constructor(private matchService: MatchService) {}

  ngOnInit() {
    this.matches = this.matchService.getMatches();
    this.prevMatches = this.matchService.getPrevMatches();
  }
}
