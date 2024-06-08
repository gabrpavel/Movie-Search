import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "../shared/shared.module";
import { NavigationHeaderComponent } from "./layouts/navigation-header/navigation-header.component";

@NgModule({
  declarations: [
    NavigationHeaderComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  exports: [
    SharedModule,
    NavigationHeaderComponent
  ]
})
export class CoreModule {
}
