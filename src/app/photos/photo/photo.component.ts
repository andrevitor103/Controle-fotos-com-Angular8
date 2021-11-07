import { Component, Input } from "@angular/core";

@Component({
  selector: "apt-photo",
  templateUrl: "photo.component.html",
})
export class PhotoComponent {
  @Input() message = "Diaxoo";
  @Input() url = "";
  @Input() description = "Imagem teste";
}
