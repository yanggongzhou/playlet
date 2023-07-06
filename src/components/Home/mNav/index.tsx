import React, { FC } from 'react'
import styles from './index.module.scss'
import Link from "next/link";
import ImageCommon from "@/components/common/ImageCommon";

interface IProps {
  visible: boolean;
  cancel: () => void;
}

const MenuData = [
  // { id: 'rankings', label: '書籍排名', link: '/rankings' },
  { id: 'about', label: '關於我們', link: '/about' },
  { id: 'business', label: '聯系我們', link: '/connect/business' },
  { id: 'user', label: '用戶協議', link: '/agreement/user' },
  { id: 'privacy', label: '隱私政策', link: '/agreement/privacy' },
]

const MNav: FC<IProps> = ({ visible, cancel }) => {
  return <div className={styles.navBox} style={{ display: visible ? 'block' : 'none' }} >
    <div className={styles.navMark} onClick={() => cancel()}/>
    <div className={styles.navMenu}>
      <div className={styles.navMenuContent}>
        { MenuData.map(val => {
          return <Link key={val.id} href={val.link} className={styles.navItem}>
            {val.label}
            <ImageCommon className={styles.navItemIcon} source={'/images/common/home/menu-item.png'} />
          </Link>
        }) }
      </div>
    </div>
  </div>
}

export default MNav
