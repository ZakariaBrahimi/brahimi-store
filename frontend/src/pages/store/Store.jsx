import React, { useContext } from 'react'
import SanityDataContext from '../../context/SanityDataContext'

const Store = () => {
    const {data, isLoading } = useContext(SanityDataContext)
  return (
    <section>{isLoading}</section>
  )
}

export default Store