import { IconFactory } from "@/components/atoms/icons/domain/use-cases/factoryIcon"
import styles from "./menuDrawer.module.css"
import { useState } from "react"

const DrawerMenu = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleDrawer = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={styles.container}>
      <div
        className={`${styles.navigation_drawer} ${isActive ? styles.active : ""}`}
      >
        <ul>
          <li>
            <div>
              <a>
                <span className={`${styles.icon} ${styles.hoverable}`}>
                  <IconFactory
                    width={35}
                    height={35}
                    color="currentColor"
                    name="Apple"
                  />
                </span>
                <span className={styles.title}>Brand Name</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a>
                <span className={`${styles.icon} ${styles.hoverable}`}>
                  <IconFactory
                    width={35}
                    height={35}
                    color="currentColor"
                    name="HomeDraw"
                  />
                </span>
                <span className={styles.title}>Dashboard</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a>
                <span className={`${styles.icon} ${styles.hoverable}`}>
                  <IconFactory
                    width={35}
                    height={35}
                    color="currentColor"
                    name="People"
                  />
                </span>
                <span className={styles.title}>Students</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a>
                <span className={`${styles.icon} ${styles.hoverable}`}>
                  <IconFactory
                    width={42}
                    height={42}
                    color="currentColor"
                    name="Teacher"
                  />
                </span>
                <span className={styles.title}>Teachers</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a>
                <span className={`${styles.icon} ${styles.hoverable}`}>
                  <IconFactory
                    width={35}
                    height={35}
                    color="currentColor"
                    name="Message"
                  />
                </span>
                <span className={styles.title}>Message</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a>
                <span className={`${styles.icon} ${styles.hoverable}`}>
                  <IconFactory
                    width={40}
                    height={40}
                    color="currentColor"
                    name="Help"
                  />
                </span>
                <span className={styles.title}>Help</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a>
                <span className={`${styles.icon} ${styles.hoverable}`}>
                  <IconFactory
                    width={35}
                    height={35}
                    color="currentColor"
                    name="Settings"
                  />
                </span>
                <span className={styles.title}>Settings</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a>
                <span className={`${styles.icon} ${styles.hoverable}`}>
                  <IconFactory
                    width={35}
                    height={35}
                    color="currentColor"
                    name="Password"
                  />
                </span>
                <span className={styles.title}>Password</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a>
                <span className={`${styles.icon} ${styles.hoverable}`}>
                  <IconFactory
                    width={40}
                    height={40}
                    color="currentColor"
                    name="SignOut"
                  />
                </span>
                <span className={styles.title}>Sign Out</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div
        className={`${styles.icon_drawer} ${isActive ? styles.icon_drawer_active : ""}`}
        onClick={toggleDrawer}
      >
        <IconFactory width={35} height={35} color="black" name="IconDrawer" />
      </div>
    </div>
  )
}

export default DrawerMenu
