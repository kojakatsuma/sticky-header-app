import React, { MouseEventHandler, useState } from 'react'
import { countryData } from './Data'
import { StickyHeader } from './StickyHeader'

export const Table: React.FC<{ headers: string[]; data: any[] }> = ({
  headers = [],
  data = [],
}) => {
  const [display, setDisplay] = useState(false)
  const [countryDetails, setData] = useState<{ countryHistroy: string | null }>(
    {
      countryHistroy: null,
    },
  )
  const { tableRef, isSticky } = StickyHeader();

  const openDetails: MouseEventHandler = (e) => {
    countryData.forEach((details) => {

      if (details.country === e.currentTarget.textContent) {
        setData({
          countryHistroy: details.data,
        })
      }
    })
    setDisplay(true)
  }
  const closeDetails = () => {
    setDisplay(false)
  }

  const renderHeader = () => (
    <thead>
      <tr>
        {headers.map((item) => (
          <th key={item}>{item}</th>
        ))}
      </tr>
    </thead>
  )

  return (
    <div>
      {isSticky && (
        <table
          className="sticky"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0
          }}
        >
          {renderHeader()}
        </table>
      )}
      <table ref={tableRef}>
        {renderHeader()}
        <tbody>
          {data.map((item) => (
            <tr key={item.code}>
              <td
                className="country"
                onMouseEnter={openDetails}
                onMouseOut={closeDetails}
              >
                {item.country}
              </td>
              <td>{item.code}</td>
              <td>{item.area}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className="country-details"
        style={{ display: display ? 'block' : 'none' }}
      >
        <p className="country-description">{countryDetails.countryHistroy}</p>
      </div>
    </div>
  )
}
