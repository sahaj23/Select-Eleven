import { Component, OnInit } from "@angular/core";
import { Player } from "../player.model.";
import { PlayerService } from "../player.service";
import { ActivatedRoute, Params } from "@angular/router";
import { TeamService } from "src/app/team/team.service";

@Component({
  selector: "app-player-detail",
  templateUrl: "./player-detail.component.html",
  styleUrls: ["./player-detail.component.css"],
})
export class PlayerDetailComponent implements OnInit {
  player: Player;
  id: number;
  isPresent = false;
  isAdmin = true;
  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private teamService: TeamService
  ) {
    if (localStorage.getItem("username") === "admin") {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.player = this.playerService.getPlayer(this.id);
      this.isPresentFunc();
    });
  }

  addToTeam() {
    this.teamService.addToTeam(this.player);
    this.isPresentFunc();
  }
  removeFromTeam() {
    this.teamService.removeFromTeam(this.player);
    this.isPresentFunc();
  }

  isPresentFunc() {
    const team: Player[] = JSON.parse(localStorage.getItem("team"));

    if (!team) {
      this.isPresent = false;

      return;
    }
    if (team.length === 11) {
      this.isPresent = true;
      return;
    }
    for (let i = 0; i < team.length; i++) {
      if (team[i].id === this.player.id) {
        this.isPresent = true;
        return;
      }
    }
    this.isPresent = false;
  }
}
