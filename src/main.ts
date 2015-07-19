/// <reference path="./storage/list"/>
/// <reference path="./view/listView"/>
/// <reference path="./dispatcher/dispatcher"/>

var dispatcher:Dispatcher = new Dispatcher();

var list = new List(dispatcher, new ListView(dispatcher,
  <HTMLUListElement>document.getElementById('list'),
  <HTMLDivElement>document.getElementById('add-item'),
  <HTMLInputElement>document.getElementById('new-task')));
