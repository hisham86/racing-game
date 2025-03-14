# Racing Game

A modern isometric racing game built with Next.js, TypeScript, and TailwindCSS.

Try it now ➡️ https://v0-new-project-l5sg7kvl3s1.vercel.app/

![Image Alt](https://github.com/hisham86/racing-game/blob/71d95ddf172cf5a3e3d879f997cf396c5c5e1483/racing%20main%20menu.png)

![Image Alt](https://github.com/hisham86/racing-game/blob/71d95ddf172cf5a3e3d879f997cf396c5c5e1483/racing%20game.png)

## Features

- 🎮 **Isometric Racing**: Smooth isometric view racing experience
- 💥 **Collision Detection**: Advanced circular collision system for:
  - Coins collection
  - Obstacle avoidance
  - Building interactions
- 🎯 **Game Objects**:
  - Collectible coins
  - Challenging obstacles
  - Interactive buildings
- 🏗️ **Modern Architecture**:
  - TypeScript for type safety
  - Next.js for performance
  - Modular game components

## Project Structure

```
src/
├── types/
│   └── game.ts         # Game type definitions
└── utils/
    └── collisions.ts   # Collision detection system
```

## Technical Details

### Collision System

The game uses a circular collision detection system optimized for isometric view:
- Player collision area is simplified to a circle
- Objects use dynamic radius based on their dimensions
- Distance-based collision checks for performance
- Type-specific collision responses

### Map Objects

Each object in the game world implements the `MapObject` interface:
```typescript
interface MapObject {
  id: string
  x: number
  y: number
  width: number
  height: number
  type: 'coin' | 'obstacle' | 'building'
}
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hisham86/racing-game.git
```

2. Install dependencies:
```bash
cd racing-game
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

The project uses:
- [Next.js](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [TailwindCSS](https://tailwindcss.com/) - Styling

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Built by Hisham - [@Solo_Level_27](https://x.com/Solo_Level_27) 
