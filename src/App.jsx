import React from 'react'
import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/load-moredata'
import TreeView from './components/tree-view'
import data from './components/tree-view/data'
import QrCodeGenerator from './components/qr-code-generator'
import LightDarkMode from './components/light-dark-mode'
import ScrollIndicator from './components/scroll-indicator'
import TabTest from './components/custom-tabs/tabs-test'
import ModalTest from './components/custom-modal-popup/modal-test'
import GithubProfileFinder from './components/github-profile-finder'
import SearchAutocomplete from './components/search-autocomplete'

const App = () => {
  return (
    <div>
      {/* <Accordian /> */}

      {/* <RandomColor /> */}

      {/* <StarRating /> */}

      {/* <ImageSlider url={`https://picsum.photos/v2/list`} limit={10} page={1} /> */}

      {/* <LoadMoreData /> */}

      {/* <TreeView menus={data} /> */}

      {/* <QrCodeGenerator /> */}

      {/* <LightDarkMode /> */}

      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}

      {/* <TabTest /> */}

      {/* <ModalTest /> */}

      {/* <GithubProfileFinder /> */}

      <SearchAutocomplete />
    </div>
  )
}

export default App
