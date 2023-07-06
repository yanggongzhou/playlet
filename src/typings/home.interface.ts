export enum EnumPosition {
  顶部banner = 0,
  熱銷好文 = 1,
  好評佳作 = 2,
  排行榜 = 3,
  大神好文 = 4,
  主編力薦 = 5,
  今日必讀 = 6,
  火熱推薦 = 7,
  CustomInset = 8
}

export interface INetHomeItem {
  position: EnumPosition;
  bookList: IBookItem[]
  columns?: INetHomeItem[]
}

export interface IBookItem {
  author: string;
  bookId: string;
  bookName: string;
  chapterCount: string;
  cover: string;
  introduction: string;
  lastChapterUtime: string;
  ratings: number;
  viewCount: string;
  viewCountDisplay: string;
  writeStatus: string;
  index?: number;
  bannerPic?: string;
}
