import React from 'react'
import styles from '@/app/not-found.module.scss';
import Link from "next/link";
import { headers } from "next/headers";
import { ownOs } from "@/utils/ownOs";
import pcEmpty from 'public/images/common/404/pcEmpty.png'
import Image from "next/image";

// 404 页面不收录进sitemap， 所以页面显示没问题即可，不必刻意显示pc或移动端的源码
const NotFoundPage = () => {
  const ua = headers().get('user-agent') || '';
  const isPc = ownOs(ua).isPc;

  return <>
    { isPc ?
      <div className={styles.pc404Wrap}>
        <Image
          className={styles.pcEmptyImg}
          unoptimized
          quality={100}
          priority={true}
          src={pcEmpty}
          alt={'404'} />
        <div className={styles.pcEmptyIntro}>
          <p>沒有找到您想要的</p>
          <p>看看有沒有其他喜歡的書</p>
        </div>
      </div>
      : <div className={styles.ddWrap}>
        <Image
          className={styles.emptyImg}
          unoptimized
          quality={100}
          priority={true}
          src={pcEmpty}
          alt={'404'} />
        <div className={styles.emptyIntro}>
          <p>抱歉，沒有找到你想要的結果。</p>
          <p>嘗試前往首頁搜索您想要的書籍吧~</p>
        </div>
        <Link href={'/'} className={styles.emptyBtn}>
          前往首頁
        </Link>
      </div> }
  </>
}

export default NotFoundPage;

