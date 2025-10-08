// lib/contentful.js

const contentful = require('contentful');

// 3단계에서 .env.local에 설정한 환경 변수를 사용합니다.
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

module.exports = {
  client
};