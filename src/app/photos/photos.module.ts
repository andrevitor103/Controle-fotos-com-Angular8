import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhotoModule } from "./photo/photo.module";
import { PhotoListModule } from "./photo-list/photo-list.module";
import { CardModule } from "../shared/components/card/card.module";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    PhotoModule,
    PhotoListModule,
    CardModule,
  ],
  exports: [PhotoModule, PhotoListModule],
  providers: [],
  declarations: [],
})
export class PhotosModule {}
