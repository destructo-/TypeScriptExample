/// <reference path="../dispatcher/dispatcher"/>

class ListView {
  private dispatcher:Dispatcher;

  private list:HTMLElement;
  private add:HTMLElement;
  private input:HTMLInputElement;

  constructor(dispatcer:Dispatcher,
    list:HTMLElement, add:HTMLElement, input:HTMLInputElement) {
    this.list = list;
    this.add = add;
    this.input = input;
    this.dispatcher = dispatcer;
    this.initEvents();
  }

  private initEvents() {
    var self = this;

    this.add.onclick = function() {
      var element:IPayload = {
        id:'',
        text: self.input.value,
        description: ''
      };

      self.dispatcher.publishEvent('new-task', element);
      self.input.value = '';
    }
  }

  public updateView(item:ListItem) {
    this.list.appendChild(Util.createListItemView(item));
  }
}
