import { ActionType, dispatch } from "./store";

function open() {
  dispatch({ type: ActionType.OPEN_MODAL });
}

function close() {
  dispatch({ type: ActionType.CLOSE_MODAL });
}

const modal = {
  close,
  open,
};

export { modal };
