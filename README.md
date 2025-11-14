🧩 Next.js Error & Rendering Demo
A personalized Next.js project exploring Client vs. Server Components and Error Boundaries using the App Router.
This project was customized from a base create-next-app template to demonstrate dynamic rendering, loading states, and error handling within modern React/Next.js 14+.

🚀 Features
Client & Server Component Comparison
Interactive examples showing how server-rendered and client-rendered elements behave differently.
Custom Error Boundaries
Demonstrates how to handle errors using route-level error.js files for both client and server segments.
Loading UI States
Uses loading.js files to show skeleton loaders while server data is being simulated.
Modern Styling
Built with Tailwind CSS and customized global styles in globals.css.
Clean Layout & Navigation
Global header and footer with links to each demo route.

🧠 How It Works
Folder Purpose
/client-error Randomly triggers a client-side error using React state.
/server-error Randomly throws a server-side error to activate error.js.
/client-vs-server Displays Pokémon rendered on the server, with a client-side “Catch” button.
Each route demonstrates one concept:
/client-error → triggers error from the browser (client)
/server-error → triggers error from the server
/client-vs-server → compares server-rendered data with client interaction
