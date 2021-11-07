import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DarkenOnHoverDirective } from "./dark-on-hover.directive";

@NgModule({
  declarations: [DarkenOnHoverDirective],
  exports: [DarkenOnHoverDirective],
  imports: [CommonModule],
})
export class DarkOnHoverModule {}
