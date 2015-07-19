/// <reference path="../dispatcher/dispatcher"/>

class ListView {
  constructor(private dispatcher:Dispatcher,
      private list:HTMLElement,
      private add:HTMLElement,
      private input:HTMLInputElement) {

    this.initEvents();
  }

  private initEvents() {
    var self = this;

    this.add.onclick = function() {
      if (self.input.value !== '') {
        var element:IPayload = {
          id:'',
          text: self.input.value,
          description: ''
        };

        self.dispatcher.publishEvent('new-task', <IPayload>element);
        self.input.value = '';
      }
    }
  }

  public updateView(item:ListItem) {
    this.list.appendChild(Util.createListItemView(item));
  }
}
