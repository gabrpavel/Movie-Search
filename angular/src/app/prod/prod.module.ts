import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home.component";
import { ProdRoutingModule } from "./prod-routing.module";
import { CoreModule } from "../core/core.module";
import { FooterComponent } from "../core/layouts/footer/footer.component";

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent
  ],
  imports: [
    ProdRoutingModule,
    CoreModule
  ],
  providers: [],
  exports: [
    CoreModule,
    FooterComponent
  ]
})
export class ProdModule{
}
