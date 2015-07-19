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

  public static truncate(str:string, len:number) {
    return str.length > len ? (str.substr(0, len - 3) + '...') : str;
  }

  public static createListItemView(item:ListItem):HTMLLIElement {
    var span = document.createElement('span');

    var container = document.createElement('li');
    container.id = item.getId();
    container.innerHTML =
        '<span class="close-button">X</span>' + item.getText();

    return container;
  }
}
