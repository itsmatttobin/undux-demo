import { Store, Effects, createConnectedStore } from 'undux';
import effects from './Effects';

// Initial state
const initialState: StoreState = {
  todos: [
    {
      text: 'Weekly catchup',
      complete: false,
    },
    {
      text: 'Demo undux',
      complete: false,
    },
    {
      text: 'Finally do an Angular demo one day!!',
      complete: false,
    }
  ],
  allComplete: false,
};

export default createConnectedStore(initialState, effects);

export type Todo = {
  text: string;
  complete: boolean;
}

export type StoreState = {
  todos: Todo[];
  allComplete: boolean;
}

export type StoreProps = {
  store: Store<StoreState>
}

export type StoreEffects = Effects<StoreState>