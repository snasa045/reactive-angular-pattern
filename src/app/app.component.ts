import { Component, OnInit } from "@angular/core";
import { LoadingService } from "./loading/loading.service";
import { MessagesService } from "./messages/messages.service";
import { AuthStore } from "./services/auth.store";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(public auth: AuthStore, private router: Router) {}

  ngOnInit() {}

  logout() {
    this.auth.logout();
    this.router.navigateByUrl("/login");
  }
}
