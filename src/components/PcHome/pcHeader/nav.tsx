import React, { FC } from 'react'
import styles from './PcHeader.module.scss'
import Link from "next/link";
import { useRouter } from "next/router";

interface IProps {

}

const MenuData = [
  { id: 'index', label: '首頁', link: '/' },
  { id: 'rankings', label: '書籍排名', link: '/rankings' },
  { id: 'about', label: '關於我們', link: '/about' },
  { id: 'business', label: '聯系我們', link: '/connect/business' },
]

const PcNav: FC<IProps> = () => {
  const router = useRouter()
  return <div className={styles.navBox}>
    { MenuData.map(val => {
      return <Link key={val.id} href={val.link} className={(router.asPath === val.link || router.asPath.includes(val.id)) ? styles.navItemActive : styles.navItem}>
        {val.label}
        {(router.asPath === val.link || router.asPath.match(val.id)) && <div className={styles.line}/>}
      </Link>
    }) }
  </div>
}

export default PcNav
