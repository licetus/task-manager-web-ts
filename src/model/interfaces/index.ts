export interface Task {
  id?: number,
  isCompleted: boolean,
  title: string,
  content?: string,
  deadline?: number,
  createTime?: number,
  lastUpdateTime?: number,
}

// export interface RequestParams {
//   data?: any,
//   id?: number,
// }

export interface RequestQuery {
  pagesize: number,
  page?: number,
  next?: number,
  filters: number,
  orderBy: number,
}

export interface ResponseList {
  total: number,
  items: any[],
}
