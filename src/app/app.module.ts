import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { HeaderComponent } from "./header/header.component";
import { PlayersComponent } from "./players/players.component";
import { TeamComponent } from "./team/team.component";
import { MatchScheduleComponent } from "./match-schedule/match-schedule.component";
import { PlayerComponent } from "./players/player-list/player/player.component";
import { PlayerDetailComponent } from "./players/player-detail/player-detail.component";
import { PlayerListComponent } from "./players/player-list/player-list.component";
import { FormsModule } from "@angular/forms";
import { LoginService } from "./login/login.service";
import { PlayerService } from "./players/player.service";
import { TeamService } from "./team/team.service";
import { TeamPlayerComponent } from "./team/team-player/team-player.component";
import { AuthService } from "./shared/auth.service";
import { ErrorComponent } from "./error/error.component";
import { MatchComponent } from "./match-schedule/match/match.component";
import { MatchService } from "./match-schedule/match.service";
import { TeamAuthService } from "./shared/team-auth.service";
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    PlayersComponent,
    TeamComponent,
    MatchScheduleComponent,
    PlayerComponent,
    PlayerDetailComponent,
    PlayerListComponent,
    TeamPlayerComponent,
    ErrorComponent,
    MatchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    LoginService,
    PlayerService,
    TeamService,
    MatchService,
    AuthService,
    TeamAuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
