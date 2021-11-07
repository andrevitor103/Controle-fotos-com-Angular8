import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from "../photo/photo";

@Pipe({
  name: "filterByDescription",
})
export class FilterByDescriptionPipe implements PipeTransform {
  transform(photos: Photo[], descriptionQuery: string) {
    if (!descriptionQuery) {
      return photos;
    }
    return photos.filter(({ description }) =>
      this.formatDescription(description).includes(
        this.formatDescription(descriptionQuery)
      )
    );
  }
  formatDescription(description: string) {
    return description.trim().toLowerCase();
  }
}
