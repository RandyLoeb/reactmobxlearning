import { observable, computed } from "mobx";

export default class ObservableCounter {
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
}
