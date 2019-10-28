import { Component, OnInit } from "@angular/core";
import moment from "moment";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular";
  now = new Date();
  yesterday: Date;
  lastMonth: Date;
  nextMonth: Date;
  lastYear: Date;
  nextYear: Date;

  constructor() {
    this.yesterday = moment(this.now).add(-1, "days").toDate();

    this.lastMonth = moment(this.now).add(-1, "months").toDate();
    this.nextMonth = moment(this.now).add(1, "months").toDate();

    this.lastYear = moment(this.now).add(-1, "years").toDate();
    this.nextYear = moment(this.now).add(1, "years").toDate();
  }

  ngOnInit() {}
}
