import type { MapObject } from "@/types/game"

interface PlayerRect {
  x: number
  y: number
  width: number
  height: number
  rotation: number
}

export function handleCollisions(
  player: PlayerRect,
  objects: MapObject[],
  onCollectCoin: (id: string) => void,
  onHitObstacle: () => void,
) {
  // Create a simplified bounding box for the player
  // For isometric view, we'll use a circular collision area
  const playerRadius = player.width / 2

  objects.forEach((object) => {
    // Calculate distance between player and object centers
    const dx = player.x - object.x
    const dy = player.y - object.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    // Object radius (simplified)
    const objectRadius = Math.max(object.width, object.height) / 2

    // Check if the distance is less than the sum of radii
    if (distance < playerRadius + objectRadius) {
      // Handle collision based on object type
      switch (object.type) {
        case "coin":
          onCollectCoin(object.id)
          break

        case "obstacle":
          onHitObstacle()
          break

        case "building":
          // Push the player away from the building
          onHitObstacle()
          break
      }
    }
  })
} 