import { StoreEffects } from './Store';

// Do things when the store updates
// - Use RxJS subscribe to subscribe to changes on specific properties
const effects: StoreEffects = store => {
  store
    .on('todos')
    .subscribe(todos => {
      if (todos.every(todo => todo.complete)) {
        store.set('allComplete')(true);
      } else {
        store.set('allComplete')(false);
      }
    });

  return store;
}

export default effects;