/// <reference path="../util/util"/>
interface IListItem {
  id:string;
  text:string;
  description:string;
}

class ListItem {
  private text:string;
  private description:string;
  private isDone:boolean;
  private id:string;

  constructor(text:string, description:string, id?:string) {
    this.text = text;
    this.description = description;
    this.isDone = false;
    this.id = id || Util.generateId();
  }

  public getId():string {
    return this.id;
  }

  public getText():string {
    return this.text;
  }

  public getDescription():string {
    return this.description;
  }

  public complete() {
    this.isDone = true;
  }

  public toJson():IListItem {
    return {
      id: this.getId(),
      text: this.getText(),
      description: this.getDescription()
    }
  }
}
