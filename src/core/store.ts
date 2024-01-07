import { useState } from "react";

enum ActionType {
  ADD_MODAL,
}

type Action = {
  type: ActionType.ADD_MODAL;
};

interface State {
  modals: any[];
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.ADD_MODAL:
      return {
        ...state,
      };
  }
};

export function useStore() {
  const [state, setState] = useState("init state");

  return { state };
}
