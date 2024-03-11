import { useEffect, useState } from "react";

export enum ActionType {
  OPEN_MODAL,
  CLOSE_MODAL,
}

type Action =
  | {
      type: ActionType.OPEN_MODAL;
    }
  | {
      type: ActionType.CLOSE_MODAL;
    };

interface State {
  isOpen: boolean;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
      };

    case ActionType.CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { isOpen: false };

export const dispatch = (action: Action) => {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
};

export function useStore() {
  const [state, setState] = useState<State>(memoryState);

  useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return { state };
}
