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
    var span = document.createElement('span');

    var container = document.createElement('li');
    container.id = item.getId();
    container.innerHTML =
        '<span class="close-button">X</span>' + item.getText();

    return container;
  }
}
