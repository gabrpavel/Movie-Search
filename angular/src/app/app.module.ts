import { NgModule } from "@angular/core";
import { AppConfig } from "./app.config";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ProdModule } from "./prod/prod.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    ProdModule,
    AppRoutingModule,
  ],
  providers: [AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule {
}
