import * as React from "react";
import { createPortal } from "react-dom";
import { useModal } from "../core/use-modal";
import { modal } from "../core/modal";

const closeModal = () => modal.close();

export function ModalContainer() {
  const { isOpen } = useModal();

  return (
    <div>
      {isOpen ? "yes" : "no"}
      {isOpen &&
        createPortal(
          <div>
            <p>Hello! This is a modal</p>
            <button type="button" onClick={() => closeModal()}>
              Close
            </button>
          </div>,
          document.body,
        )}
    </div>
  );
}
