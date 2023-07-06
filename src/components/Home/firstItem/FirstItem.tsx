import React, { FC } from 'react'
import styles from '@/components/Home/firstItem/FirstItem.module.css'
import ImageCommon from "@/components/common/ImageCommon";
import { IBookItem } from "@/typings/home.interface";
import Link from "next/link";

interface IProps {
  dataSource: IBookItem[];
}

const FirstItem: FC<IProps> = ({ dataSource }) => {

  return <div className={styles.firstItemWrap}>
    {dataSource && dataSource.length > 0 && (dataSource as IBookItem[]).map((book) => {
      return <div key={book.bookId} className={styles.imageItem1Wrap}>
        <Link href={`/book/${book.bookId}`}>
          <ImageCommon w={180} h={238} className={styles.bookImage} source={book.cover} alt={book.bookName}/>
        </Link>
        <Link href={`/book/${book.bookId}`}>
          <h2 className={styles.bookName}>{book.bookName}</h2>
        </Link>
        <Link href={`/book/${book.bookId}`} className={styles.author}>
          {book.author}
        </Link>
      </div>
    })}
  </div>
}

export default FirstItem;
