import { Component, OnInit, Input } from "@angular/core";
import { Player } from "src/app/players/player.model.";
import { TeamService } from "../team.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-team-player",
  templateUrl: "./team-player.component.html",
  styleUrls: ["./team-player.component.css"],
})
export class TeamPlayerComponent implements OnInit {
  @Input() player: Player;
  @Input() id: string;
  constructor(private teamService: TeamService, private router: Router) {}

  ngOnInit() {}
  removeFromTeam() {
    this.teamService.removeFromTeam(this.player);
    location.reload();
  }
}
