import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicSVGComponent from './components/DynamicSVGComponent';
import SplitText from './components/SplitText';
import './styles/Blog.css';

function Blog() {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [contentType, setContentType] = useState('development'); // 'development' or 'uiux'
  const contentRef = useRef(null);

  const learningTitles = [
    "设计模式",
    "开发模式",
    "项目的可维护性？",
    "浏览器原理", 
    "性能优化",
    "组件封装",
    "前端性能优化",
    "Vite原理",
    "语法糖",
    "前端动效",
    "开发模式",
    "CSS布局",
    "HTML语义化",
    "npm与pnpm",
  ];

  const uiuxTitles = [
    "Ae,Spline,Rive的学习",
    "色彩心理学",
    "UX",
    "信息架构",
    "设计系统",
    "视觉层次、视觉动线",
    "用户旅程、用户研究",
    "不同类型、风格的UI设计、无障碍设计",
    "移动端与web端的设计规范",
    "Figma的学习",
  ];

  const handleIconClick = (e) => {
    e.preventDefault();
    console.log('第一个图标被点击了！');
    console.log('showContent 之前:', showContent);
    setContentType('development');
    setShowContent(true);
    console.log('showContent 设置为 true');
    
    setTimeout(() => {
      console.log('延迟执行，contentRef.current:', contentRef.current);
      if (contentRef.current) {
        console.log('开始滚动到内容区域');
        contentRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        console.log('contentRef.current 不存在');
      }
    }, 100);
  };

  const handleSecondIconClick = (e) => {
    e.preventDefault();
    console.log('第二个图标被点击了！');
    console.log('showContent 之前:', showContent);
    setContentType('uiux');
    setShowContent(true);
    console.log('showContent 设置为 true');

    setTimeout(() => {
      console.log('延迟执行，contentRef.current:', contentRef.current);
      if (contentRef.current) {
        console.log('开始滚动到内容区域');
        contentRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        console.log('contentRef.current 不存在');
      }
    }, 100);
  };

  const handleBackToTop = () => {
    setShowContent(false);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

    return (
    <div className="blog-page">
      <div className="back-button-top" style={{
        position: 'absolute',
        top: '40px',
        left: '20px',
        zIndex: 1000
      }}>
        <button className="button" onClick={() => navigate('/')}>
          Home
        </button>
      </div>
      
      <div className="social-icons" style={{
        position: 'absolute',
        top: '32px',
        right: '20px',
        zIndex: 1000
      }}>
        <div className="container">
          <button onClick={handleIconClick} className="icon icon-instagram">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.9153 18.4143C28.9341 18.3222 29.0658 18.3222 29.0847 18.4143C30.0625 23.1986 33.8014 26.9374 38.5856 27.9153C38.6778 27.9341 38.6778 28.0658 38.5856 28.0847C33.8014 29.0625 30.0625 32.8014 29.0847 37.5856C29.0658 37.6778 28.9341 37.6778 28.9153 37.5856C27.9374 32.8014 24.1986 29.0625 19.4143 28.0847C19.3222 28.0658 19.3222 27.9341 19.4143 27.9153C24.1986 26.9374 27.9374 23.1986 28.9153 18.4143Z" stroke="#302C1A" strokeWidth="3"/>
              <path d="M38.4879 8.30627C38.7392 7.2371 40.261 7.2371 40.5123 8.30627L40.5366 8.40978C41.092 10.7723 42.9997 12.578 45.3892 13.0027C46.5034 13.2007 46.5034 14.7991 45.3892 14.9972C42.9997 15.4218 41.092 17.2275 40.5366 19.59L40.5123 19.6936C40.261 20.7627 38.7392 20.7627 38.4879 19.6936L38.4636 19.59C37.9082 17.2275 36.0005 15.4218 33.611 14.9972C32.4968 14.7991 32.4968 13.2007 33.611 13.0027C36.0005 12.578 37.9082 10.7723 38.4636 8.40978L38.4879 8.30627Z" fill="#302C1A"/>
              <path d="M12 9V39M8 9H16M8 39H16" stroke="#302C1A" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </button>
          <a href="#" onClick={handleSecondIconClick} className="icon icon-dis">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.06244 7.58707C7.271 6.56668 8.72896 6.56668 8.93752 7.58708C9.39815 9.84073 11.1594 11.6019 13.413 12.0626C14.4334 12.2711 14.4334 13.7291 13.413 13.9376C11.1594 14.3983 9.39815 16.1595 8.93752 18.4131C8.72896 19.4335 7.271 19.4335 7.06244 18.4131C6.60181 16.1595 4.84061 14.3983 2.58695 13.9376C1.56656 13.7291 1.56656 12.2711 2.58695 12.0626C4.84061 11.6019 6.60181 9.84073 7.06244 7.58707Z" fill="#302C1A"/>
              <path d="M21 44.5072C18.0703 43.868 15.1173 42.5988 12.383 40.6843C4.84279 35.4046 1.34573 26.8828 3.32288 19.9999M35.6426 18.9999C40.7745 25.2605 41 31.9999 39 34.9999C35 40.9999 27 36.9999 27 36.9999M16 10.2342C20.2456 9.85515 24.9482 10.9252 29.2406 13.4999M17.5876 32.8154C16.6112 32.845 15.8118 32.0456 15.8413 31.0692C15.9198 28.4787 16.984 26.0159 18.8165 24.1833L34.1716 8.82831C35.7337 7.26621 38.2663 7.26621 39.8284 8.82831C41.3905 10.3904 41.3905 12.9231 39.8284 14.4852L24.4734 29.8402C22.6408 31.6728 20.178 32.7369 17.5876 32.8154Z" stroke="#302C1A" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </div>
       
      <div className="blog-content">
        <svg 
          width="400" 
          height="12" 
          viewBox="0 0 400 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="decorative-line decorative-line-left"
        >
          <path d="M1 5C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7V6V5ZM398.774 6L393 0.226497L387.226 6L393 11.7735L398.774 6ZM1 6V7H393V6V5H1V6Z" fill="#363636"/>
        </svg>
        <svg 
          width="400" 
          height="12" 
          viewBox="0 0 400 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="decorative-line decorative-line-right"
          style={{ transform: 'translateY(-50%) scaleX(-1) scale(1.2)' }}
        >
          <path d="M1 5C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7V6V5ZM398.774 6L393 0.226497L387.226 6L393 11.7735L398.774 6ZM1 6V7H393V6V5H1V6Z" fill="#363636"/>
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <DynamicSVGComponent />
          <SplitText
            text="Study is a lifelong journey"
            className="text-2xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
            onLetterAnimationComplete={() => console.log('All letters have animated!')}
          />
        </div>
      </div>
      
      {showContent && (
        <div className="learning-content-section" ref={contentRef}>
          <div className="learning-content-container">
            {(contentType === 'development' ? learningTitles : uiuxTitles).map((title, index) => (
              <div key={index}>
                <h2 className="learning-title-item">{title}</h2>
                {index < (contentType === 'development' ? learningTitles : uiuxTitles).length - 1 && <hr className="learning-divider" />}
              </div>
            ))}
            
            <div className="back-to-top-container">
              <button onClick={handleBackToTop} className="back-to-top-btn">
                ↑ 返回顶部
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blog;
