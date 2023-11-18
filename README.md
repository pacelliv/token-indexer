## Week 6 project - Indexeum 👾

### ⚡️⚡️ [Live Demo](https://heartfelt-souffle-0fc1e6.netlify.app)

### Overview

Indexeum allows you to query any address for its ERC20 and NFT balances on Ethereum using its indexers.

It's my intention to add support for wallets and more EVM-compatible networks.

### Quick Start 🏃‍♀️🏃

To install the dependencies run:

```bash
npm install
```

Create a `.env` file and add the following enviroment variables:

```bash
VITE_MAINNET_RPC_URL=
VITE_MAINNET_API_KEY=
```

If you don't have a API key, you can get one for free from [Alchemy](https://www.alchemy.com/).

Run the development server:

```bash
npm run dev
```

Open http://localhost:5173 with your browser to see the result.

Build the project:
```bash
npm run build
npm run preview
```

After building the project and launching the local environment, open http://localhost:4173/ on your browser and visit the `/erc20-indexer` and `/nft-indexer` pages and start making queries.

### Built With 👷🏻‍♀️👷🏻

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/en/main)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Alchemy SDK](https://www.alchemy.com/sdk)
- [TanStack Table](https://tanstack.com/table/v8)
- [React Loader Spinner](https://mhnpd.github.io/react-loader-spinner/)