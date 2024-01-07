import * as React from "react";
import { useModal } from "../core/use-modal";

export function ModalContainer() {
  const foo = useModal();

  return <div>Modals container, {foo}</div>;
}
