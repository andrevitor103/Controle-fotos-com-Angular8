import { Component, Input } from "@angular/core";

@Component({
  selector: "apt-card",
  templateUrl: "./card.component.html",
})
export class CardComponent {
  @Input() title: string = "";
}
