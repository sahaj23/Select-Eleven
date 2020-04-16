import { Component, OnInit } from "@angular/core";
import { PlayerService } from "../player.service";
import { Player } from "../player.model.";

@Component({
  selector: "app-player-list",
  templateUrl: "./player-list.component.html",
  styleUrls: ["./player-list.component.css"],
})
export class PlayerListComponent implements OnInit {
  players: Player[];
  constructor(private playerService: PlayerService) {
    this.players = this.playerService.getPlayers();
  }

  ngOnInit() {}
}
