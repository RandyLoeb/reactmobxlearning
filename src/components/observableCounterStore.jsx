import { observable, computed, action } from "mobx";

export default class ObservableCounterStore {
  @observable
  counters = [
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
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
