import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotFoundComponent } from "./not-found/not-found.component";
import { SemDadosComponent } from './sem-dados/sem-dados.component';

@NgModule({
  declarations: [NotFoundComponent, SemDadosComponent],
  imports: [CommonModule],
})
export class ErrorsModule {}
