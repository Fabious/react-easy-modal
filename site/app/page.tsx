import { ModalContainer } from "react-easy-modal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Bonjour, monde !
      <ModalContainer />
    </main>
  );
}
