import { ModalContainer } from "react-easy-modal";
import { Button } from "./button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>React Easy Modal</p>
      <Button />
      <ModalContainer />
    </main>
  );
}
