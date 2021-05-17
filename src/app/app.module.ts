import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { CadastroDetailComponent } from './cadastro-detail/cadastro-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrosComponent,
    CadastroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
