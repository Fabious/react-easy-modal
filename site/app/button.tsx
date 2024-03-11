"use client";

import modal from "react-easy-modal";

const openModal = () => modal.open();

export function Button() {
  return <button onClick={() => openModal()}>Click me!</button>;
}
