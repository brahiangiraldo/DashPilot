import React from "react"
import { TableProps } from "./TableProps"
import "./table.css"

function Table(props: TableProps) {
  const { columns, rows, minCellWidth, height, bgNeutral, handleOrder } = props

  return (
    <section
      className="section-data-table"
      style={{
        background: bgNeutral ? "#f0f0f0" : "#ffffff",
        maxHeight: height ?? "",
      }}
    >
      <table className="resizeable-table">
        <thead className="table-header">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                style={{ minWidth: `calc(${minCellWidth}px - 2rem)` }}
              >
                <span>
                  {column.header}
                  {column.sortable && (
                    <div
                      onClick={() => handleOrder && handleOrder(index)}
                    ></div>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{row[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Table
