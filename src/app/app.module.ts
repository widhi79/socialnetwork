import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { appRoutingModule } from "./app.routing";
import { landingComponent } from "./landing/landing.component";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./landing/header/header.component";
import { ContentComponent } from "./landing/content/content.component";
import { FooterComponent } from "./landing/footer/footer.component";

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        appRoutingModule
    ],
    exports: [RouterModule],
    declarations: [
        AppComponent,
        landingComponent,
        HeaderComponent,
        ContentComponent,
        FooterComponent
    ]
})
export class AppModule{
    
}