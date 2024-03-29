import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ToggleTimeStampComponent } from "./toggle-time-stamp/toggle-time-stamp.component";
import { TimeagoPipe } from "./timeago.pipe";
import { CookieService } from "ngx-cookie-service";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ToggleTimeStampComponent,
    TimeagoPipe
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
