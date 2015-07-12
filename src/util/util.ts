class Util {
  public static generateId():string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
      }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  public static createListItemView(item:ListItem):HTMLElement {
    var closeButton = document.createElement('div');
    closeButton.className = 'close-button';
    closeButton.innerText = 'X';

    var container = document.createElement('li');
    container.id = item.getId();
    container.innerText = item.getText();

    return container;
  }
}
