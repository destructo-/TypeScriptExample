/// <reference path="./listItem"/>
/// <reference path="../view/listView"/>
/// <reference path="../dispatcher/dispatcher"/>
/// <reference path="./storage"/>

class List {
  private items:Array<ListItem>;
  private storage:LocalStorage;

  constructor(private dispatcher:Dispatcher, private view:ListView) {
    this.storage = new LocalStorage('list');
    this.items = [];
    this.initListeners();
    this.restore();
  }

  private initListeners() {
    var self = this;

    this.dispatcher.registerListener({'event':'task-done', 'func':function(
      payload?:IPayload) {
        for (var i = 0, j = self.items.length; i < j; i += 1) {
          if (self.items[i].getId() === payload['id']) {
            self.items[i].complete();
          }
        }
      }});

    this.dispatcher.registerListener({'event':'new-task', 'func':function(
      payload?:IPayload) {
        self.addItem(new ListItem(payload.text, payload.description));
      }});
  }

  public addItem(item:ListItem) {
    this.items.push(item);
    this.view.updateView(item);

    var temp = [];
    temp = this.storage.get('items');
    if (temp) {
      temp.push(item.toJson());
    } else {
      temp = [item.toJson()];
    }
    this.storage.set('items', temp);
  }

  private restore() {
    var items:Array<IListItem> = this.storage.get('items');
    if (items) {
      for (var i = 0, j = items.length; i < j; i += 1) {
        var item = new ListItem(
            items[i].text, items[i].description, items[i].id);
        if (!this.isInList(item)) {
          this.items.push(item);
          this.view.updateView(item);
        }
      }
    }
    var self = this;
    setTimeout(function() {
      self.restore()
    }, 1000);
  }

  private isInList(item:ListItem) {
    for (var i = 0, j = this.items.length; i < j; i += 1) {
      if (this.items[i].getId() === item.getId()) {
        return true;
      }
    }
    return false;
  }
}
