import { Component, OnInit, Input } from "@angular/core";
import { LoginService } from "../login/login.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  username = null;
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.user.subscribe((userName) => {
      this.username = userName;
    });
  }
}
