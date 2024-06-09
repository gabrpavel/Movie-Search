import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home.component";
import { ProdRoutingModule } from "./prod-routing.module";
import { CoreModule } from "../core/core.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ProdRoutingModule,
    CoreModule
  ],
  providers: [],
  exports: [
    CoreModule
  ]
})
export class ProdModule {
}
