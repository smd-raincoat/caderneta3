import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import{HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ViagemPage} from '../pages/viagem/viagem';
import {CadastroAnotacaoPage} from '../pages/cadastro-anotacao/cadastro-anotacao';
import {AnotacaoPage} from '../pages/anotacao/anotacao'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CadastroViagemPage} from '../pages/cadastro-viagem/cadastro-viagem';
import { ChecklistPage } from '../pages/checklist/checklist';
import { AddPage } from '../pages/add/add';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';
import { MaterialDeApoioPage } from '../pages/material-de-apoio/material-de-apoio';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CadastroViagemPage,
    ViagemPage,
    ChecklistPage,
    AddPage,
    CadastroAnotacaoPage,
    AnotacaoPage,
    MaterialDeApoioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CadastroViagemPage,
    ViagemPage,
    ChecklistPage,
    AddPage,
    CadastroAnotacaoPage,
    AnotacaoPage,
    MaterialDeApoioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DocumentViewer,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
