// pages/_app.js
import '../styles/blog_design.css'; // 🚨 새로 만든 CSS 파일 경로
import React from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;