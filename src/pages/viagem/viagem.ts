import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{CadastroAnotacaoPage} from '../cadastro-anotacao/cadastro-anotacao';
import{AnotacaoPage} from '../anotacao/anotacao';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-viagem',
  templateUrl: 'viagem.html',
})
export class ViagemPage {

  public viagens:any;
  public viagem:any;
  public indexViagem:any;
  public anotacoes:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
    
    this.viagens = localStorage.getItem('viagens');
    this.viagens = JSON.parse(this.viagens);
    this.indexViagem = localStorage.getItem('indexViagem');
    console.log(this.indexViagem);
    this.viagem = this.viagens[this.indexViagem];
    console.log(this.viagens);
    this.anotacoes = this.viagens[this.indexViagem].anotacoes;
  }

  ionViewWillEnter() {
    this.viagens = JSON.parse(localStorage.getItem("viagens"));
    this.anotacoes = this.viagens[this.indexViagem].anotacoes;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViagemPage');
    console.log(this.viagem); 
  }
  
  goCadastroAnotacaoPage(){
    this.navCtrl.push(CadastroAnotacaoPage);
  }

  goAnotacaoPage(i):void {
    localStorage.setItem("indexAnotacao",i);
    this.navCtrl.push(AnotacaoPage);
  }

  apagarViagem(){
    let alert = this.alertCtrl.create({
      title: 'Apagar Viagem!',
      message: 'Você deseja mesmo apagar essa viagem?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Apagar',
          handler: () => {
            this.viagens.splice(this.indexViagem,1);
            localStorage.setItem("viagens", JSON.stringify(this.viagens));
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }


}
