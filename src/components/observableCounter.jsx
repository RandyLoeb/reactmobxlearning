import { observable, action } from "mobx";

export default class ObservableCounter {
  constructor(id, value, store) {
    this.id = id;
    this.value = value;
    this.store = store;
  }
  @observable
  id = 0;

  @observable
  value = 0;

  @action
  increment = () => {
    this.value++;
  };

  del = () => {
    if (this.store) this.store.delete(this.id);
  };
}
