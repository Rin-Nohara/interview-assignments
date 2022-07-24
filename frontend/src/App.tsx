import React from "react";
import "./App.css";
import airpods from './assets/airpods.png'
import iphone from './assets/iphone.png'
import tablet from './assets/tablet.png'
import Carousel, { type ItemType } from "./components/Carousel";

function App() {
  const list: ItemType[] = [{
    src: airpods,
    desc: 'world',
    title: 'hello'
  },{
    src: iphone,
    desc: 'world',
    title: 'hello'
  },{
    src: tablet,
    desc: 'world',
    title: 'hello'
  }]
  return <div className="App">
    <Carousel imgList={list} delay={1000} />
  </div>;
}

export default App;
