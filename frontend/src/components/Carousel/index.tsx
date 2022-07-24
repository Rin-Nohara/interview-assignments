import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

export type ItemType = {
  src: string;
  title?: string;
  desc?: string;
};

export interface CarouselProps {
  imgList: ItemType[];
  delay?: number;
}

const Carousel = (props: CarouselProps) => {
  const { imgList, delay = 3000 } = props;
  const scrollRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [currentShow, setCurrentShow] = useState(0);

  // TODO function name
  function move(delay?: number): any {
    let count = 1;
    let maxCount = imgList.length;
    // TODO 改用 requestAnimationFrame
    setInterval(() => {
      // content 容器
      const contentElement = scrollRef.current as HTMLDivElement;
      // wrapper 容器
      const wrapperElement = wrapperRef.current as HTMLDivElement;
      // wrapper 宽度 (一次平移的 px)
      const wrapperWidth = parseInt(
        getComputedStyle(wrapperElement).getPropertyValue("width")
      );
      let shouldTranslate = wrapperWidth * count++;
      if (count >= maxCount) {
        count = 0;
      }
      if(currentShow === imgList.length - 1) {
        setCurrentShow(0)
      } else {
        setCurrentShow(currentShow + 1)
      }
      // 进行平移
      contentElement.style.transform = `translateX(-${shouldTranslate}px)`;
    }, delay || 500);
  }

  useEffect(() => {
    move(delay);
  }, [delay]);

  return (
    <div ref={wrapperRef} className="carousel-wrap">
      <div ref={scrollRef} className="content">
        {imgList.map((item) => (
          <div
            key={item.src}
            className="carousel"
            style={{
              backgroundImage: `url(${item.src})`,
            }}
          >
            <p className="title">{item.title}</p>
            <p className="desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// function ProgressBar(props) {
//   const { num } = props
//   return <div className="nav">
//     {imgList.map((_, idx) => (
//       <div className="progress-wrapper">
//         <div style={{
//           transitionDuration: delay + 'ms'
//         }} className={`progress-bar ${currentShow === idx ? 'fill' :''}`}></div>
//       </div>
//     ))}
//   </div>
// }

export default Carousel;
