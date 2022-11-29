
import React from "react";
import './App.css';
import Header from './Header';
// import PageComponent from "./PageComponent";
import ContentComponent from './ContentComponent';


function App() {
  let articlesInfo = [
    {
      title: '7 Practical CSS Tips',
      description: 'You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.',
      img: 'Img.png'
    },
    {
      title: '7 Practical CSS Tips',
      description: 'Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...',
      img: 'Img-5.png'
    },
    {
      title: '7 Practical CSS Tips',
      description: 'Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...',
      img: 'Img-6.png'
    }
  ]
  return (
    <div className="App" id="container1">
      <Header />
      {articlesInfo.map((articleInfo, index) => {
        return <ContentComponent info={articleInfo} key={index} />
      })}




    </div>
  );
}

export default App;