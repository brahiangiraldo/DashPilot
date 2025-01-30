import { StaticImageData } from "next/image"

export interface AvatarProps {
  image: string | StaticImageData
  width?: number | string
  height?: number | string
}
