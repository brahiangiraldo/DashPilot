import React from "react"
import { IconFactory } from "@/components/atoms/icons/domain/use-cases/factoryIcon"
import styles from "./button.module.css"
import { ButtonProps } from "./ButtonProps"

const Button = ({
  children,
  type,
  bgStyle,
  size,
  textSize,
  onClick,
  redirectTo,
  disable,
  borderRadius = 50,
  showIcon = false,
}: ButtonProps) => {
  const onRedirect = () => {
    if (redirectTo) {
      return (window.location.href = redirectTo)
    }
  }

  return (
    <button
      onClick={disable ? () => {} : redirectTo ? onRedirect : onClick}
      className={`${styles.button} ${bgStyle ? styles[bgStyle] : ""} ${size ? styles[size] : ""}`}
      type={type}
      disabled={disable}
      style={{
        fontSize: `${textSize}px`,
        borderRadius: `${borderRadius}px`,
      }}
    >
      {showIcon && (
        <span className={styles.icon}>
          <IconFactory
            width={15}
            height={15}
            color="currentColor"
            name="Search"
          />
        </span>
      )}
      {children}
    </button>
  )
}

export default Button
