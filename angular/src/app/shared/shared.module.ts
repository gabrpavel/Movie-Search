import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgScrollbarModule } from "ngx-scrollbar";
import { ServicesModule } from "./services/services.module";

@NgModule({
  declarations: [],
  imports: [
    FontAwesomeModule,
    NgScrollbarModule,
    ServicesModule
  ],
  providers: [],
  exports: [
    FontAwesomeModule,
    NgScrollbarModule,
    ServicesModule
  ]
})
export class SharedModule {
}
