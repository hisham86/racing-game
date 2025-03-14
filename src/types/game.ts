export interface MapObject {
  id: string
  x: number
  y: number
  width: number
  height: number
  type: 'coin' | 'obstacle' | 'building'
} 