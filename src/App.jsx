import React from 'react'
import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/load-moredata'
import TreeView from './components/tree-view'
import data from './components/tree-view/data'

const App = () => {
  return (
    <div>
      {/* <Accordian /> */}

      {/* <RandomColor /> */}

      {/* <StarRating /> */}

      {/* <ImageSlider url={`https://picsum.photos/v2/list`} limit={10} page={1} /> */}

      {/* <LoadMoreData /> */}

      <TreeView menus={data} />
    </div>
  )
}

export default App
