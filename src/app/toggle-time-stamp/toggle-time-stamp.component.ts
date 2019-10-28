import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-toggle-time-stamp",
  templateUrl: "./toggle-time-stamp.component.html",
  styleUrls: ["./toggle-time-stamp.component.css"]
})
export class ToggleTimeStampComponent {
  @Input() timestamp: Date;
  showTimeAgo: false;
  constructor() {
  }
}
