import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "../shared/shared.module";
import { NavigationHeaderComponent } from "./layouts/navigation-header/navigation-header.component";
import { FooterComponent } from "./layouts/footer/footer.component";

@NgModule({
  declarations: [
    NavigationHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  exports: [
    SharedModule,
    NavigationHeaderComponent,
    FooterComponent
  ]
})
export class CoreModule {
}
