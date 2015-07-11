/// <reference path="./storage/list"/>
/// <reference path="./view/listView"/>
/// <reference path="./dispatcher/dispatcher"/>

var listItem = new ListItem('wrgrtgrt','q');

var dispatcher:Dispatcher = new Dispatcher();

var list = new List(dispatcher, new ListView(dispatcher,
  document.getElementById('list'),
  document.getElementById('add-item'),
  <HTMLInputElement>document.getElementById('new-task')));
