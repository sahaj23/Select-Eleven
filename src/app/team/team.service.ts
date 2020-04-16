import { Player } from "../players/player.model.";

export class TeamService {
  addToTeam(player: Player) {
    const storedTeam: Player[] = JSON.parse(localStorage.getItem("team"));
    let team: Player[] = [];
    if (!storedTeam) {
      team.push(player);
    } else {
      team = storedTeam;
      team.push(player);
    }
    localStorage.setItem("team", JSON.stringify(team));
  }

  removeFromTeam(player: Player) {
    const storedTeam: Player[] = JSON.parse(localStorage.getItem("team"));
    for (let i = 0; i < storedTeam.length; i++) {
      if (storedTeam[i].id === player.id) {
        storedTeam.splice(i, 1);
        localStorage.setItem("team", JSON.stringify(storedTeam));
        return;
      }
    }
  }
  getTeam(): Player[] {
    const storedTeam: Player[] = JSON.parse(localStorage.getItem("team"));
    const team: Player[] = [];
    if (!storedTeam) {
      return team;
    } else {
      return storedTeam;
    }
  }
}
