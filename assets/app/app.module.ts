import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { routing } from './app.routing';
import { AuthService } from './auth/auth.service';
import { ErrorComponent } from './errors/error.component';
import { ErrorService } from './errors/error.service';
import { MessageModule } from './messages/message.module';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent
    ],
    providers: [AuthService, ErrorService],
    imports: [BrowserModule, routing, HttpModule, MessageModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}