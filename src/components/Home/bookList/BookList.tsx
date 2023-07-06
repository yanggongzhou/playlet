import React, { FC } from 'react'
import styles from './BookList.module.css'
import ImageCommon from "@/components/common/ImageCommon";
import { IBookItem } from "@/typings/home.interface";
import Link from "next/link";

interface IProps {
  dataSource: IBookItem[];
}

const BookList: FC<IProps> = ({dataSource}) => {
  return <div className={styles.bookListWrap}>
    {dataSource && dataSource.length > 0 && dataSource.map((book) => {
      const { bookId, bookName, author, introduction, cover } = book;
      return <div key={bookId} className={styles.imageItem1Wrap}>
        <Link href={`/book/${bookId}`} >
          <ImageCommon w={130} h={172} className={styles.bookImage} source={cover} alt={bookName}/>
        </Link>
        <div className={styles.bookInfo}>
          <Link href={`/book/${bookId}`} >
            <h2 className={styles.bookName}>{bookName}</h2>
          </Link>
          <Link href={`/book/${bookId}`} className={styles.author} >
            {author}
          </Link>
          <Link href={`/book/${bookId}`}>
            {introduction}
          </Link>
        </div>
      </div>
    })}
  </div>
}

export default BookList;
