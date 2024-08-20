import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Youtube from './components/Youtube';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export default class App extends React.Component {
  state = {
    videos: [],
  }

  onSearchYoutube = (keyword) => {
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${keyword}&order=viewCount&maxResults=5&key=${YOUTUBE_API_KEY}`;
    //apiキーを認証後、検索キーワードから動画を探す
    axios
      .get(url)
      //検索結果のURLを取得
      .then(response => {
          this.setState({
            videos: response.data.items,
          });
      })
      .catch(() => {
        //検索結果がない場合
          console.log('通信に失敗しました');
      });
  }

  render() {
    return (
      <>
        <Header onSearchYoutube={this.onSearchYoutube} />
        { }
        <Youtube videos={this.state.videos}/>
      </>
    )
  }
}
