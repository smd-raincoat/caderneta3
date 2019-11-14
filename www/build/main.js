webpackJsonp([7],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnotacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AnotacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnotacaoPage = /** @class */ (function () {
    function AnotacaoPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viagens = localStorage.getItem('viagens');
        this.viagens = JSON.parse(this.viagens);
        this.indexViagem = localStorage.getItem('indexViagem');
        this.indexAnotacao = localStorage.getItem('indexAnotacao');
        console.log(this.indexViagem);
        this.viagem = this.viagens[this.indexViagem];
        console.log(this.viagens);
        this.anotacao = this.viagens[this.indexViagem].anotacoes[this.indexAnotacao];
        console.log(this.anotacao);
    }
    AnotacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnotacaoPage');
    };
    AnotacaoPage.prototype.apagarAnotacao = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Apagar Anotação!',
            message: 'Você deseja mesmo apagar essa anotação?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Apagar',
                    handler: function () {
                        _this.viagens[_this.indexViagem].anotacoes.splice('indexAnotacao', 1);
                        localStorage.setItem("viagens", JSON.stringify(_this.viagens));
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    AnotacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-anotacao',template:/*ion-inline-start:"C:\Users\Windows\Documents\cn-master\src\pages\anotacao\anotacao.html"*/'<!--\n  Generated template for the AnotacaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Anotação</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <div padding>\n        <button ion-button block (click) = "apagarAnotacao()">Apagar anotação</button>\n    </div>\n    <ion-label><b>Data:</b></ion-label>\n    <ion-label>{{anotacao.data}}</ion-label>\n    <ion-label><b>Hora:</b></ion-label>\n    <ion-label>{{anotacao.hora}}</ion-label>\n    <ion-label><b>Coordenadas:</b></ion-label>\n    <ion-label>{{anotacao.coordenada}}</ion-label>\n    <ion-label><b>Texto:</b></ion-label>\n    <ion-label>{{anotacao.texto}}</ion-label>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Windows\Documents\cn-master\src\pages\anotacao\anotacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AnotacaoPage);
    return AnotacaoPage;
}());

//# sourceMappingURL=anotacao.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroAnotacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CadastroAnotacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroAnotacaoPage = /** @class */ (function () {
    function CadastroAnotacaoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cadastroForm = {
            data: "",
            hora: "",
            coordenadas: "",
            texto: "",
            imagem: ""
        };
        this.cadastroForm = {
            data: "",
            hora: "",
            coordenadas: "",
            texto: "",
            imagem: "",
        };
        this.viagens = localStorage.getItem('viagens');
    }
    CadastroAnotacaoPage.prototype.setData = function (data, hora, coordenadas, texto) {
        var cadastroForm = {
            data: "",
            hora: "",
            coordenadas: "",
            texto: "",
            imagem: "",
        };
        cadastroForm.data = data;
        cadastroForm.hora = hora;
        cadastroForm.coordenadas = coordenadas;
        cadastroForm.texto = texto;
    };
    CadastroAnotacaoPage.prototype.logForm = function () {
        this.viagens = localStorage.getItem('viagens');
        this.viagens = JSON.parse(this.viagens);
        this.viagens[localStorage.getItem("indexViagem")].anotacoes.push(this.cadastroForm);
        localStorage.setItem("viagens", JSON.stringify(this.viagens));
    };
    CadastroAnotacaoPage.prototype.getData = function () {
        return localStorage.getItem("viagens");
    };
    CadastroAnotacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroAnotacaoPage');
    };
    CadastroAnotacaoPage.prototype.goViagem = function () {
        this.navCtrl.pop();
    };
    CadastroAnotacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-anotacao',template:/*ion-inline-start:"C:\Users\Windows\Documents\cn-master\src\pages\cadastro-anotacao\cadastro-anotacao.html"*/'<!--\n  Generated template for the CadastroAnotacaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <ion-title style="padding-left: 70px;">\n          <div  class="toolbar-title-toolbar-title-md" ng-reflect-klass="toolbar-title" ng-reflect-ng-class="toolbar-title-md">Nova Viagem</div>\n        </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n   \n        <div padding class="slide">\n    <form (ngSubmit)="logForm()">\n        <h1>Criar viagem</h1>\n        <ion-item>\n          <ion-label floating>Data</ion-label>\n          <ion-datetime displayFormat = "DD MMM YYYY" [(ngModel)]="cadastroForm.data" name="data"></ion-datetime>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label floating>Hora</ion-label>\n          <ion-datetime displayFormat="h:mm A" pickerFormat = "h mm a" [(ngModel)]="cadastroForm.hora" name="hora"></ion-datetime>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label floating>Coordenadas</ion-label>\n          <ion-input type="text" [(ngModel)]="cadastroForm.coordendas" name="coordenadas"></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label floating>Texto</ion-label>\n          <ion-textarea rows = "10" cols = "20" [(ngModel)]="cadastroForm.texto" name="texto"></ion-textarea>\n        </ion-item>\n  \n        <button ion-button block type="submit" (click) = "goViagem()">Seguir</button>\n      \n      </form>\n        </div>\n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\Windows\Documents\cn-master\src\pages\cadastro-anotacao\cadastro-anotacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CadastroAnotacaoPage);
    return CadastroAnotacaoPage;
}());

//# sourceMappingURL=cadastro-anotacao.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddPage = /** @class */ (function () {
    function AddPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.todoList = JSON.parse(localStorage.getItem("todos"));
        this.todoList = JSON.parse(localStorage.getItem("todos"));
        if (!this.todoList) {
            this.todoList = [];
        }
        this.todoItem = "";
    }
    AddPage.prototype.save = function () {
        if (this.todoItem != "") {
            this.todoList.push(this.todoItem);
            localStorage.setItem("todos", JSON.stringify(this.todoList));
            this.navCtrl.pop();
        }
    };
    AddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPage');
        console.log(this.todoList);
    };
    AddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add',template:/*ion-inline-start:"C:\Users\Windows\Documents\cn-master\src\pages\add\add.html"*/'<!--\n  Generated template for the AddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Adicionar Item</ion-title>\n  </ion-navbar>\n  <ion-buttons end>\n      <button (click)="save()"><ion-icon name="checkmark"></ion-icon></button>\n  </ion-buttons>\n</ion-header>\n\n<ion-content padding class="add">\n    <ion-list>\n        <ion-item>\n            <ion-label floating>Novo Item</ion-label>\n            <ion-input type="text" [(ngModel)]="todoItem"></ion-input>\n        </ion-item>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Windows\Documents\cn-master\src\pages\add\add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AddPage);
    return AddPage;
}());

//# sourceMappingURL=add.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroViagemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CadastroViagemPage = /** @class */ (function () {
    function CadastroViagemPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cadastroForm = {
            titulo: "",
            data: "",
            cidade: "",
            partida: "",
            retorno: "",
            observacoes: "",
            anotacoes: []
        };
        this.cadastroForm = {
            titulo: '',
            data: '',
            cidade: '',
            partida: '',
            retorno: '',
            observacoes: '',
            anotacoes: []
        };
    }
    CadastroViagemPage.prototype.setData = function (titulo, data, cidade, partidaData, partidaHora, retornoData, retornoHora, observacoes) {
        var cadastroForm = {
            titulo: '',
            data: '',
            cidade: '',
            partidaData: '',
            partidaHora: '',
            retornoData: '',
            retornoHora: '',
            observacoes: ''
        };
        cadastroForm.titulo = titulo;
        cadastroForm.data = data;
        cadastroForm.cidade = cidade;
        cadastroForm.partidaData = partidaData;
        cadastroForm.partidaHora = partidaHora;
        cadastroForm.retornoData = retornoData;
        cadastroForm.retornoHora = retornoHora;
        cadastroForm.observacoes = observacoes;
    };
    CadastroViagemPage.prototype.logForm = function () {
        console.log(this.cadastroForm);
        console.log(this.viagens);
        this.viagens = localStorage.getItem('viagens');
        console.log(this.viagens);
        this.viagens = JSON.parse(this.viagens);
        this.viagens.push(this.cadastroForm);
        console.log(this.viagens);
        localStorage.setItem("viagens", JSON.stringify(this.viagens));
    };
    CadastroViagemPage.prototype.getData = function () {
        return localStorage.getItem("viagens");
    };
    CadastroViagemPage.prototype.ionViewDidEnter = function () {
    };
    CadastroViagemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroViagemPage');
    };
    CadastroViagemPage.prototype.goHome = function () {
        this.navCtrl.pop();
    };
    CadastroViagemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-viagem',template:/*ion-inline-start:"C:\Users\Windows\Documents\cn-master\src\pages\cadastro-viagem\cadastro-viagem.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>cadastro da viagem</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h1>Criar viagem</h1>\n    <form (ngSubmit)="logForm()">\n  \n      <ion-item>\n        <ion-label floating>Título</ion-label>\n        <ion-input type="text"  [(ngModel)]="cadastroForm.titulo"  name="titulo"></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label floating>Data: DD/MM/YYYY</ion-label>\n        <ion-datetime displayFormat = "DD MMM YYYY" [(ngModel)]="cadastroForm.data" name="data"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Cidade: HH:MM</ion-label>\n        <ion-input type="text" [(ngModel)]="cadastroForm.cidade" name="cidade"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Data de partida: DD/MM/YYYY</ion-label>\n        <ion-datetime displayFormat = "DD MMM YYYY" [(ngModel)]="cadastroForm.partidaData" name="partidaData"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Hora de partida: HH:MM</ion-label>\n        <ion-datetime displayFormat="h:mm A" [(ngModel)]="cadastroForm.partidaHora" name="partidaHora"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Data de retorno: DD/MM/YYYY</ion-label>\n        <ion-datetime displayFormat = "DD MMM YYYY" [(ngModel)]="cadastroForm.retornoData" name="retornoData"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Hora de retorno: HH:MM</ion-label>\n        <ion-datetime displayFormat="h:mm A" [(ngModel)]="cadastroForm.retornoHora" name="retornoHora"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Observações</ion-label>\n        <ion-textarea rows = "5" cols = "20" type="text" [(ngModel)]="cadastroForm.observacoes" name="observacoes"></ion-textarea>\n      </ion-item>\n      <button ion-button block type="submit" (click) = "goHome()">Seguir</button>\n    \n    </form>\n    \n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\Windows\Documents\cn-master\src\pages\cadastro-viagem\cadastro-viagem.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CadastroViagemPage);
    return CadastroViagemPage;
}());

//# sourceMappingURL=cadastro-viagem.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_add__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChecklistPage = /** @class */ (function () {
    function ChecklistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        /*checklist: Array<string> = ['GPS','Oculos','Bússola'];
        newObj(){
          
        }*/
        this.todoList = JSON.parse(localStorage.getItem("todos"));
    }
    ChecklistPage.prototype.ionViewWillEnter = function () {
        this.todoList = JSON.parse(localStorage.getItem("todos"));
        if (!this.todoList) {
            this.todoList = [''];
        }
    };
    ChecklistPage.prototype.delete = function (index) {
        this.todoList.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(this.todoList));
    };
    ChecklistPage.prototype.add = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_add__["a" /* AddPage */]);
    };
    ChecklistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChecklistPage');
        console.log(this.todoList);
    };
    ChecklistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checklist',template:/*ion-inline-start:"C:\Users\Windows\Documents\cn-master\src\pages\checklist\checklist.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Materiais Para Viagem</ion-title>\n    <ion-buttons end>\n      <button (click)="add()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="todos">\n  <!--<ion-list id="items">\n\n    <ion-item>\n      <ion-label>{{checklist[0]}}</ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>{{checklist[1]}}</ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>{{checklist[2]}}</ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n  </ion-list>-->\n  <h6>Arraste para o lado para deletar</h6>\n  <ion-list>\n    <ion-item-sliding *ngFor="let todo of todoList; let i = index">\n      <ion-item>\n        <h2>{{ todo }}</h2>\n      </ion-item>\n      <ion-item-options>\n        <button danger (click)="delete(i)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Windows\Documents\cn-master\src\pages\checklist\checklist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChecklistPage);
    return ChecklistPage;
}());

//# sourceMappingURL=checklist.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialDeApoioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_document_viewer__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MaterialDeApoioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MaterialDeApoioPage = /** @class */ (function () {
    function MaterialDeApoioPage(navCtrl, navParams, document, file, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.document = document;
        this.file = file;
        this.platform = platform;
    }
    MaterialDeApoioPage.prototype.documentOne = function () {
        var filePath = this.file.applicationDirectory + 'www/assets';
        var options = {
            title: 'Pdf 1'
        };
        this.document.viewDocument(filePath + '/diagramasrochas.pdf', 'application/pdf', options);
    };
    MaterialDeApoioPage.prototype.documentTwo = function () {
        var filePath = this.file.applicationDirectory + 'www/assets';
        var options = {
            title: 'Pdf 2'
        };
        this.document.viewDocument(filePath + '/tiposderochas.pdf', 'application/pdf', options);
    };
    MaterialDeApoioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MaterialDeApoioPage');
    };
    MaterialDeApoioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-material-de-apoio',template:/*ion-inline-start:"C:\Users\Windows\Documents\cn-master\src\pages\material-de-apoio\material-de-apoio.html"*/'<!--\n  Generated template for the MaterialDeApoioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Material De Apoio</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n   \n  <button ion-button full (click)="documentOne()">Diagrama de Rochas</button>\n  <button ion-button full (click)="documentTwo()">Tipos de Rocha</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Windows\Documents\cn-master\src\pages\material-de-apoio\material-de-apoio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_document_viewer__["a" /* DocumentViewer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], MaterialDeApoioPage);
    return MaterialDeApoioPage;
}());

//# sourceMappingURL=material-de-apoio.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViagemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_anotacao_cadastro_anotacao__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__anotacao_anotacao__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViagemPage = /** @class */ (function () {
    function ViagemPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viagens = localStorage.getItem('viagens');
        this.viagens = JSON.parse(this.viagens);
        this.indexViagem = localStorage.getItem('indexViagem');
        console.log(this.indexViagem);
        this.viagem = this.viagens[this.indexViagem];
        console.log(this.viagens);
        this.anotacoes = this.viagens[this.indexViagem].anotacoes;
    }
    ViagemPage.prototype.ionViewWillEnter = function () {
        this.viagens = JSON.parse(localStorage.getItem("viagens"));
        this.anotacoes = this.viagens[this.indexViagem].anotacoes;
    };
    ViagemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViagemPage');
        console.log(this.viagem);
    };
    ViagemPage.prototype.goCadastroAnotacaoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastro_anotacao_cadastro_anotacao__["a" /* CadastroAnotacaoPage */]);
    };
    ViagemPage.prototype.goAnotacaoPage = function (i) {
        localStorage.setItem("indexAnotacao", i);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__anotacao_anotacao__["a" /* AnotacaoPage */]);
    };
    ViagemPage.prototype.apagarViagem = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Apagar Viagem!',
            message: 'Você deseja mesmo apagar essa viagem?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Apagar',
                    handler: function () {
                        _this.viagens.splice(_this.indexViagem, 1);
                        localStorage.setItem("viagens", JSON.stringify(_this.viagens));
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    ViagemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viagem',template:/*ion-inline-start:"C:\Users\Windows\Documents\cn-master\src\pages\viagem\viagem.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n        <div  class="toolbar-title-toolbar-title-md" ng-reflect-klass="toolbar-title" ng-reflect-ng-class="toolbar-title-md">{{viagem.titulo}}</div>\n        \n    </ion-title>\n    <img src="assets/imgs/lixo.png" style="align-self: flex-end;" (click) = "apagarViagem()">\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n    <div padding class="slide">\n  <div padding>\n    \n    <!--<button ion-button block (click) = "apagarViagem()">Apagar viagem</button>-->\n  </div>\n\n  <ion-label><b>Título:</b></ion-label>\n  <ion-label>{{viagem.titulo}}</ion-label>\n  <ion-label><b>Data:</b></ion-label>\n  <ion-label>{{viagem.data}}</ion-label>\n  <ion-label><b>Cidade:</b></ion-label>\n  <ion-label>{{viagem.cidade}}</ion-label>\n  <ion-label><b>Data de partida:</b></ion-label>\n  <ion-label>{{viagem.partidaData}}</ion-label>\n  <ion-label><b>Hora de partida:</b></ion-label>\n  <ion-label>{{viagem.partidaHora}}</ion-label>\n  <ion-label><b>Data de retorno:</b></ion-label>\n  <ion-label>{{viagem.retornoData}}</ion-label>\n  <ion-label><b>Hora de retorno:</b></ion-label>\n  <ion-label>{{viagem.retornoHora}}</ion-label>\n  <ion-label><b>Observações:</b></ion-label>\n  <ion-label>{{viagem.observacoes}}</ion-label>\n\n  <div padding>\n    <button ion-button block (click)="goCadastroAnotacaoPage()">Criar anotação</button>\n  </div>\n\n  <div padding *ngFor = "let anotacao of anotacoes; let i = index">\n      <button ion-button block (click)="goAnotacaoPage(i)" >Anotacao {{ i + 1}}</button>\n  </div>\n    </div>\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Windows\Documents\cn-master\src\pages\viagem\viagem.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ViagemPage);
    return ViagemPage;
}());

//# sourceMappingURL=viagem.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add/add.module": [
		282,
		6
	],
	"../pages/anotacao/anotacao.module": [
		280,
		5
	],
	"../pages/cadastro-anotacao/cadastro-anotacao.module": [
		281,
		4
	],
	"../pages/cadastro-viagem/cadastro-viagem.module": [
		283,
		3
	],
	"../pages/checklist/checklist.module": [
		284,
		2
	],
	"../pages/material-de-apoio/material-de-apoio.module": [
		285,
		1
	],
	"../pages/viagem/viagem.module": [
		286,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_viagem_cadastro_viagem__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viagem_viagem__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vetor = [];
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.viagens = JSON.parse(localStorage.getItem("viagens"));
        if (!this.viagens) {
            localStorage.setItem("viagens", JSON.stringify(this.vetor));
        }
    };
    HomePage.prototype.goCadastroViagemPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastro_viagem_cadastro_viagem__["a" /* CadastroViagemPage */]);
    };
    HomePage.prototype.goViagemPage = function (i) {
        localStorage.setItem("indexViagem", i);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__viagem_viagem__["a" /* ViagemPage */]);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        console.log(this.viagens);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Windows\Documents\cn-master\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title style="padding-left: 70px;">\n      <div class="toolbar-title-toolbar-title-md" ng-reflect-klass="toolbar-title"\n        ng-reflect-ng-class="toolbar-title-md">Início</div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides>\n    <div padding class="slide">\n      <img class="new" src="assets/imgs/new.png" (click)="goCadastroViagemPage()">\n      <div padding *ngFor="let viagem of viagens; let i = index">\n        <button ion-button (click)="goViagemPage(viagem)">\n          <img style="width:65%; position:absolute; top:18px;" src="assets/imgs/viagens.png">\n          <label style="position:absolute; top:90px;">{{viagem.titulo}}</label>\n        </button>\n\n\n\n        \n      </div>\n    </div>\n\n\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"C:\Users\Windows\Documents\cn-master\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_viagem_viagem__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cadastro_anotacao_cadastro_anotacao__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_anotacao_anotacao__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cadastro_viagem_cadastro_viagem__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_checklist_checklist__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_add_add__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_document_viewer__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_material_de_apoio_material_de_apoio__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cadastro_viagem_cadastro_viagem__["a" /* CadastroViagemPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_viagem_viagem__["a" /* ViagemPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_checklist_checklist__["a" /* ChecklistPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cadastro_anotacao_cadastro_anotacao__["a" /* CadastroAnotacaoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_anotacao_anotacao__["a" /* AnotacaoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_material_de_apoio_material_de_apoio__["a" /* MaterialDeApoioPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/anotacao/anotacao.module#AnotacaoPageModule', name: 'AnotacaoPage', segment: 'anotacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-anotacao/cadastro-anotacao.module#CadastroAnotacaoPageModule', name: 'CadastroAnotacaoPage', segment: 'cadastro-anotacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add/add.module#AddPageModule', name: 'AddPage', segment: 'add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-viagem/cadastro-viagem.module#CadastroViagemPageModule', name: 'CadastroViagemPage', segment: 'cadastro-viagem', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checklist/checklist.module#ChecklistPageModule', name: 'ChecklistPage', segment: 'checklist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/material-de-apoio/material-de-apoio.module#MaterialDeApoioPageModule', name: 'MaterialDeApoioPage', segment: 'material-de-apoio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viagem/viagem.module#ViagemPageModule', name: 'ViagemPage', segment: 'viagem', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cadastro_viagem_cadastro_viagem__["a" /* CadastroViagemPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_viagem_viagem__["a" /* ViagemPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_checklist_checklist__["a" /* ChecklistPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cadastro_anotacao_cadastro_anotacao__["a" /* CadastroAnotacaoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_anotacao_anotacao__["a" /* AnotacaoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_material_de_apoio_material_de_apoio__["a" /* MaterialDeApoioPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_file__["a" /* File */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_checklist_checklist__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_material_de_apoio_material_de_apoio__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, dataProvider) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Página Inicial', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Materiais Para Viagem', component: __WEBPACK_IMPORTED_MODULE_6__pages_checklist_checklist__["a" /* ChecklistPage */] },
            { title: 'Materiais De Apoio', component: __WEBPACK_IMPORTED_MODULE_7__pages_material_de_apoio_material_de_apoio__["a" /* MaterialDeApoioPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Windows\Documents\cn-master\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n    <ion-header>\n      <ion-navbar class="sidemenu" color="secondary" style="font-size: 50px;">\n      <ion-toolbar class="sidemenu" color="secondary" style="font-size: 50px;">\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n      </ion-navbar>\n    </ion-header>\n  \n    <ion-content>\n      <div padding class="slide">\n      <ion-list>\n        <button class= menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </div>\n    </ion-content>\n  \n  </ion-menu>\n  \n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Windows\Documents\cn-master\src\app\app.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* dataProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* dataProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var dataProvider = /** @class */ (function () {
    function dataProvider() {
    }
    dataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], dataProvider);
    return dataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Windows\Documents\cn-master\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="title title-md">\n      <div class="toolbar-title toolbar-title-md" ng-reflect-klass="toolbar-title" ng-reflect-ng-class="toolbar-title-md" style="font-family:Comfortaa">Materiais Para Viagem</div></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-slides>\n        <div padding class="slide">\n  <ion-list>\n      \n    <button class= "teste" ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n        </div>\n    </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Windows\Documents\cn-master\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map