<div align="center"><strong>Stupidly easy modals for React</strong></div>

## Installation

WIP

## Getting Started

```jsx
import modal, { Modals } from 'react-easy-modal';

const openModal = () => modal.open(<p>My beautiful modal</p>);

const App = () => {
  return (
    <div>
      <button onClick={openModal}>Open my modal</button>
      <Modals />
    </div>
  );
};
```

## How to contribute

In one terminal, start the dev in watch mode

```
pnpm run setup
pnpm dev

```

In an athoner terminal, start the nextjs server

```
cd site/
pnpm dev
```

Now you can code and test like in a real app your contribution!
