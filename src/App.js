import React from 'react';
import SearchBar from '../src/components/SearchBar';
import unsplash from '../src/api/unsplash';
import ImageList from '../src/components/ImageList'

class App extends React.Component {
  state={
    data:[]
  }
  _onSearchSubmit = async (term)  => {
    const response = await unsplash.get(`/search/photos`,{
      params:{query:term},
      
    })
    console.log(response.data);
    this.setState({data:response.data.results})
  }

  render() {
    console.log(this.state)
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this._onSearchSubmit} />
        <ImageList images={this.state.data}/>
      </div>
    )
  }

}

export default App;