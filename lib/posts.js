// my-contentful-blog/lib/posts.js

const contentful = require('contentful');

// 🚨 클라이언트를 이 파일 안에서 직접 초기화하여 외부 파일 의존성 제거
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// Content Type ID: 'blogPost' (확인된 소문자 ID 사용)
const CONTENT_TYPE_BLOGPOST = 'blogPost'; 


async function getAllPosts() {
  try {
    const entries = await client.getEntries({
      content_type: CONTENT_TYPE_BLOGPOST,
      select: 'fields.slug,fields.title,fields.date',
      order: '-fields.date', 
    });

    if (entries.items) {
      return entries.items.map(item => ({
        slug: item.fields.slug,
        title: item.fields.title,
        date: item.fields.date,
      }));
    }
    return [];
  } catch (error) {
    console.error('Error fetching all posts from Contentful:', error);
    // API 연결 실패 시 빈 배열 반환하여 빌드 크래시 방지
    return [];
  }
}

async function getPostBySlug(slug) {
  try {
    const entries = await client.getEntries({
      content_type: CONTENT_TYPE_BLOGPOST,
      'fields.slug': slug, 
      include: 10,
    });

    if (entries.items && entries.items.length === 1) {
      const post = entries.items[0];
      
      // 필요한 필드 반환
      return {
        slug: post.fields.slug,
        title: post.fields.title,
        date: post.fields.date,
        heroImage: post.fields.heroImage,
        content: post.fields.content,
        affiliateLink: post.fields.affiliateLink,
        assets: entries.includes.Asset || [], 
      };
    }
    return null;
  } catch (error) {
    console.error(`Error fetching post by slug (${slug}) from Contentful:`, error);
    return null;
  }
}

module.exports = {
  getAllPosts,
  getPostBySlug
};