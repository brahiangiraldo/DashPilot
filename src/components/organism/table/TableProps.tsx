export interface Column {
  header: string
  accessor: string
  sortable?: boolean
}

export interface TableProps {
  columns: Column[]
  rows: any[]
  minCellWidth?: number
  height?: string
  bgNeutral?: boolean
  handleOrder?: (index: number) => void
  orderDesc?: boolean
  tableHeight?: string
  activeIndex?: number
  mouseDown?: (index: number) => void
}
