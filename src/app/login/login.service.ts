import { BehaviorSubject } from "rxjs";

export class LoginService {
  user = new BehaviorSubject<string>(null);
  login(userName: string, password: string): string {
    if (userName === "admin" && password === "admin") {
      this.user.next(userName);
      localStorage.setItem("username", userName);
      return "admin";
    } else if (userName === "guest" && password === "guest") {
      this.user.next(userName);
      localStorage.setItem("username", userName);
      return "guest";
    } else {
      return null;
    }
  }

  autoLogin() {
    const username = localStorage.getItem("username");
    if (username != null) {
      this.user.next(username);
    }
  }

  logOut() {
    this.user.next(null);
    localStorage.removeItem("username");
  }
  whoIsLoggedIn() {
    const username = localStorage.getItem("username");
    if (username != null) {
      return username;
    } else {
      return null;
    }
  }
}
