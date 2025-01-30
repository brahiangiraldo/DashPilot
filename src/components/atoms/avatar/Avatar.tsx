import Image from "next/image"
import { AvatarProps } from "./AvatarProps"
import styles from "./avatar.module.css"

const Avatar = ({ image, width, height }: AvatarProps) => {
  return (
    <div
      className={styles.avatarContainer}
      style={{ width: `${width}`, height: `${height}` }}
    >
      <Image className={styles.avatar} src={image} alt="Avatar" />
    </div>
  )
}
export default Avatar
