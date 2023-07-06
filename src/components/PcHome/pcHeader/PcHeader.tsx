import React, { FC, useEffect, useState } from 'react'
import styles from './PcHeader.module.scss'
import ImageCommon from "@/components/common/ImageCommon";
import PcNav from "@/components/PcHome/pcHeader/nav";
import { useRouter } from "next/router";
import Link from "next/link";
import { ClientConfig } from "@/client.config";
import { Toast } from "antd-mobile";

const PcHeader: FC = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    const _searchValue = router?.query?.searchValue ?? ''
    setSearchValue(_searchValue as string);
  }, [router])
  const onSearch = () => {
    if (searchValue) {
      router.push({ pathname: '/search', query: { searchValue } })
    } else {
      Toast.show('請輸入搜索內容')
    }
  }
  return <div className={styles.navWrap}>
    <div className={styles.navContent}>
      <div className={styles.navLeft}>
        <Link href={'/'} className={styles.logoTxtBox}>
          <ImageCommon source={'/images/playlet/pcLogoTxt.png'} className={styles.logoTxt} alt={ClientConfig.name}/>
        </Link>
        <PcNav />
      </div>
      <div className={styles.navRight}>
        <ImageCommon source={'/images/playlet/pcSearch.png'} className={styles.navRightIcon} onClick={() => onSearch()}/>
        <input
          className={styles.navRightInput}
          type="search"
          value={searchValue}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              onSearch()
            }
          }}
          onInput={(e) => {
            // @ts-ignore
            setSearchValue(e.target.value)
          }}
          placeholder='請輸入搜索內容'
        />
      </div>
    </div>
  </div>
}

export default PcHeader
