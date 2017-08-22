import React from 'react'
import Header from '../components/Header.jsx'
import SongList from '../components/SongList.jsx'

class ChartContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();
    request.open("GET", url);

    request.addEventListener("load", () => {
      if(request.status === 200){
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        const filtered = data.feed.entry;
        this.setState({
          data: filtered
        });
      }
    });
    request.send();
  }

  render(){
    return(
      <div className="chart-container">
        <Header title="UK Top 20 Songs"/>
        <SongList data={this.state.data}/>
      </div>
    )
  }
}

export default ChartContainer;
