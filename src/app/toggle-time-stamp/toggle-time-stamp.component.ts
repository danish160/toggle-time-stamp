import { Component, OnInit, Input } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-toggle-time-stamp",
  templateUrl: "./toggle-time-stamp.component.html",
  styleUrls: ["./toggle-time-stamp.component.css"]
})
export class ToggleTimeStampComponent implements OnInit {
  @Input() timestamp: Date;
  // @Input()
  showTimeAgo: boolean;
  constructor(private cookieService: CookieService) {}
  ngOnInit() {
    const cookieExists: boolean = this.cookieService.check("showTimeAgo");
    if (cookieExists) {
      console.log("cookieExists");
      const value: string = this.cookieService.get("showTimeAgo");
      this.showTimeAgo = value.toLocaleLowerCase() == "true";
    } else {
      console.log("no cookieExists");
      this.showTimeAgo = true;
      this.cookieService.set("showTimeAgo", "true");
    }
  }
}
