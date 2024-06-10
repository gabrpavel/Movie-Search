import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home.component";
import { ProdRoutingModule } from "./prod-routing.module";
import { CoreModule } from "../core/core.module";
import { MovieSearchComponent } from "./components/movie-search/movie-search.component";

@NgModule({
  declarations: [
    HomeComponent,
    MovieSearchComponent
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
