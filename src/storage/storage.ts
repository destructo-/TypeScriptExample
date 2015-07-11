class LocalStorage {
  private name: string;
  private storage: Storage;

  constructor(name:string) {
    this.name = name;
    this.init();
  }

  private init() {
    this.storage = localStorage;
  }

  public set(key:string, value:any) {
    var temp = [];
    this.storage.setItem(this.name + '-' + key, JSON.stringify(value));
  }

  public get(key:string):any {
    return JSON.parse(this.storage.getItem(this.name + '-' + key));
  }
}
