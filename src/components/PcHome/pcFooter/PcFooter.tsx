import React, { FC } from 'react'
import styles from '@/components/PcHome/pcFooter/PcFooter.module.scss'
import Link from "next/link";

const listData = [
  { label: '隱私政策', url: '/agreement/privacy' },
  { label: '用戶協議', url: '/agreement/user' },
  { label: '下載APP', url: '/about' },
]

const PcFooter: FC = () => {

  return <div className={styles.footerWrap}>
    <div className={styles.footerLineTop} />
    <div className={styles.footerContent}>
      <div className={styles.footerLink}>
        {listData.map(val => {
          if(val.label === '下載APP') {
            return <Link key={val.label} href={'/'} rel={'nofollow'} target={'_blank'} >
                <div className={val.label === '下載APP' ? styles.downBtn : styles.otherBtn}>{val.label}</div>
            </Link>
          }
          return <Link key={val.label} href={val.url} className={styles.otherBtn}>
            {val.label}
          </Link>
        })}
      </div>
      <div className={styles.footerText}>
        <p>AllRightReserved</p>
        <p>companyName</p>
      </div>
    </div>
  </div>
}

export default PcFooter
