
import React from "react";
import './App.css';
import Header from './Header';
import PageComponent from "./PageComponent";
import ContentComponent from './ContentComponent';


function App() {
  let articlesInfo = [
    {
      title: 'Title1',
      description: 'Description1',
      img: 'Img.png'
    },
    {
      title: 'Title2',
      description: 'Description2',
      img: 'Img-5.png'
    },
    {
      title: 'Title3',
      description: 'Description3',
      img: 'Img-6.png'
    }
  ]
  return (
    <div className="App" id="container1">
      <Header />
      {articlesInfo.map((articleInfo) => {
        return <ContentComponent info={articleInfo} />
      })}




    </div>
  );
}

export default App;