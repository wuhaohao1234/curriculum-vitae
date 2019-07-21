import { action, computed, observable } from "mobx";

export default class ViewModel {
  @observable public age = 9;
  @observable public users = [];

  @computed get computedAge() {
    return this.age;
  }

  @action.bound public setAge() {
    this.age++;
  }

  @action.bound public async fetchUsers() {}
}