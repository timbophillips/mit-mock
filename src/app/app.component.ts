import { Component, VERSION } from "@angular/core";
import { of } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  cases$ = of([
    {
      date: "19790401",
      patient: {
        date: "19790401",
        umrn: "A1234567",
        firstname: "Tim",
        lastname: "Phillips"
      },
      doctor: { name: "WM" },
      access: { vessel: "Radial Arrteru" },
      procedure: { text: "Varicocele" }
    }
  ]);
}
