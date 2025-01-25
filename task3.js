class Storage {
    constructor(items) {
      this.items = items;
    }
    getItems() {
      return this.items;
    }
    addItem(item) {
      return this.items.push(item);
    }
      removeItem(item) {
      const remove = this.items.indexOf(item);
      if (remove !== -1) {
          return this.items.splice(remove, 1)
      };
    }
  }

const storage = new Storage ([
    "1",
    "2",
    "3"
])


const items = storage.getItems();
console.log(items);

storage.addItem("4");
console.log(storage.items);

storage.removeItem("1");
console.log(storage.items); 