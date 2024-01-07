import { useStore } from "./store";

function useModal(modalOptions?: any) {
  const { state } = useStore();

  return state;
}

export { useModal };
