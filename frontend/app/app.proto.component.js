/**
 * Created by lee on 2016. 11. 1..
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var CONTENTS = [
    { id: 1, name: 'name', content: 'content' },
];
var INPUTCONTENT = { id: 0, name: "", content: "" };
var ProtoComponent = (function () {
    function ProtoComponent(http) {
        this.http = http;
        this.content = { id: 0, name: "", content: "" };
        this.inputContent = INPUTCONTENT;
        this.contents = CONTENTS;
        this.title = 'DAOU CLOUD BACKOFFICE PROTO';
        this.headers = new http_1.Headers({ 'Content-Type': 'text/plain' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    ProtoComponent.prototype.ngOnInit = function () { };
    ProtoComponent.prototype.onSelect = function (content) {
        alert("!!!!!!!!!!!!!");
    };
    ProtoComponent.prototype.onSend = function (content) {
        this.jsonString = JSON.stringify(content);
        this.http.post('http://localhost:8080/test', this.jsonString, this.options).map(function (res) { return res.text(); }).subscribe();
    };
    ProtoComponent = __decorate([
        core_1.Component({
            selector: 'proto-main',
            templateUrl: 'app/app.proto.component.html',
            styleUrls: ["app/app.proto.component.css"]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProtoComponent);
    return ProtoComponent;
}());
exports.ProtoComponent = ProtoComponent;
//# sourceMappingURL=app.proto.component.js.map