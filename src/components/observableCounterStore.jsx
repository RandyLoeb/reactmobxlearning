import { observable, computed, action } from "mobx";
import ObservableCounter from "./observableCounter";

export default class ObservableCounterStore {
  @observable
  counters = [
    new ObservableCounter(1, 0, this),
    new ObservableCounter(2, 2, this),
    new ObservableCounter(3, 0, this),
    new ObservableCounter(4, 0, this),
    new ObservableCounter(5, 1, this)
  ];

  @computed
  get totalCounters() {
    return this.counters.filter(c => c.value > 0).length;
  }

  @action
  reset = () => {
    this.counters.forEach(c => (c.value = 0));
  };

  @action
  increment = counter => {
    counter.value++;
  };

  @action
  delete = counterId => {
    for (var i = this.counters.length - 1; i >= 0; i--) {
      if (this.counters[i].id === counterId) {
        this.counters.splice(i, 1);
      }
    }
  };
}
