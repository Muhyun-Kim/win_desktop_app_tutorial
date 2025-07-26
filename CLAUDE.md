# Win Desktop App Tutorial - Tauri Project

## Project Overview
This is a Tauri desktop application built with Svelte and TypeScript.

## Project Configuration
- **Project Name**: win-desktop-app-tutorial
- **Bundle Identifier**: com.win-desktop-app-tutorial.app
- **Frontend Framework**: Svelte with TypeScript
- **Package Manager**: yarn (npm also works)
- **Backend**: Rust (Tauri)

## Development Commands
```bash
# Install dependencies
yarn install  # or npm install

# Run development server with hot reload
yarn tauri dev  # or npm run tauri dev

# Build for production
yarn tauri build  # or npm run tauri build

# Run frontend only
yarn dev  # or npm run dev

# Type checking
yarn check  # or npm run check
```

## Project Structure
```
win-desktop-app-tutorial/
├── src/                    # Frontend (Svelte/TypeScript)
│   ├── routes/            # SvelteKit routes
│   │   └── +page.svelte   # Main page component
│   └── app.html           # HTML template
├── src-tauri/             # Backend (Rust)
│   ├── src/
│   │   ├── main.rs        # Application entry point
│   │   └── lib.rs         # Tauri commands
│   └── tauri.conf.json    # Tauri configuration
├── static/                # Static assets
└── package.json           # Node dependencies
```

## Key Technologies
- **Tauri**: Cross-platform desktop app framework
- **Svelte**: Reactive UI framework
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool
- **Rust**: System programming for native features

## Development Tips
1. Frontend code goes in `/src` directory (TypeScript/Svelte)
2. Backend/system code goes in `/src-tauri/src` (Rust)
3. Use `invoke` API to call Rust functions from TypeScript
4. Hot reload works for both frontend and backend changes

## Debugging
- Frontend: Chrome DevTools automatically opens with `yarn tauri dev`
- Backend: Use VS Code with rust-analyzer extension
- Console logs from Rust appear in the terminal

## Important Instructions
- NEVER modify code unless explicitly requested by the user
- Only provide explanations and examples without editing files
- Wait for user's explicit request before making any code changes