import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { PlayersComponent } from "./players/players.component";
import { PlayerListComponent } from "./players/player-list/player-list.component";
import { PlayerDetailComponent } from "./players/player-detail/player-detail.component";
import { TeamComponent } from "./team/team.component";
import { AuthService } from "./shared/auth.service";
import { ErrorComponent } from "./error/error.component";
import { MatchScheduleComponent } from "./match-schedule/match-schedule.component";
import { TeamAuthService } from "./shared/team-auth.service";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthService] },
  {
    path: "match-schedule",
    component: MatchScheduleComponent,
    canActivate: [AuthService],
  },

  {
    path: "players",
    component: PlayersComponent,
    canActivate: [AuthService],
    children: [
      {
        path: ":id",
        component: PlayerDetailComponent,
      },
    ],
  },
  { path: "players", component: PlayersComponent, canActivate: [AuthService] },
  {
    path: "team",
    component: TeamComponent,
    canActivate: [AuthService, TeamAuthService],
  },
  { path: "**", component: ErrorComponent },
  { path: "players/**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
