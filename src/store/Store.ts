import { Store, Effects, createConnectedStore, withReduxDevtools } from 'undux';
import effects from './Effects';

// Initial state
const initialState: StoreState = {
  todos: [
    {
      text: 'Todo 1',
      complete: false,
    },
    {
      text: 'Todo 2',
      complete: false,
    },
    {
      text: 'Todo 3',
      complete: false,
    }
  ],
  allComplete: false,
};

export default createConnectedStore(initialState, s => withReduxDevtools(effects(s)));

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