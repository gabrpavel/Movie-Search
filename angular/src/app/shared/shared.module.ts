import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgScrollbarModule } from "ngx-scrollbar";

@NgModule({
  declarations: [],
  imports: [
    FontAwesomeModule,
    NgScrollbarModule
  ],
  providers: [],
  exports: [
    FontAwesomeModule,
    NgScrollbarModule
  ]
})
export class SharedModule {
}
