// my-contentful-blog/lib/posts.js

const { client } = require('./contentful'); // Contentful 클라이언트 가져오기

// Content Model ID: BlogPost (고객님이 확인해주신 'blogPost' 사용)
const CONTENT_TYPE_BLOGPOST = 'blogPost'; 


/**
 * 1. 모든 게시글의 목록(Slug 포함)을 가져옵니다.
 * (Next.js의 getStaticPaths에서 전체 경로 생성을 위해 사용됩니다.)
 */
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
    return [];
  }
}

/**
 * 2. 특정 Slug에 해당하는 단일 게시글의 상세 데이터를 가져옵니다.
 * (Next.js의 getStaticProps에서 개별 페이지 데이터 로딩에 사용됩니다.)
 */
async function getPostBySlug(slug) {
  try {
    const entries = await client.getEntries({
      content_type: CONTENT_TYPE_BLOGPOST,
      'fields.slug': slug, 
      include: 10, // Rich Text의 미디어(이미지) 등 참조된 항목을 함께 가져옵니다.
    });

    if (entries.items && entries.items.length === 1) {
      const post = entries.items[0];
      
      // Contentful 응답을 사용하기 쉽게 정리합니다.
      return {
        slug: post.fields.slug,
        title: post.fields.title,
        date: post.fields.date,
        heroImage: post.fields.heroImage,
        content: post.fields.content, // Rich Text 필드
        affiliateLink: post.fields.affiliateLink, // 고객님의 'Affiliate Link' 필드
        
        // Rich Text에서 미디어를 참조할 수 있도록 asset 정보를 포함합니다.
        assets: entries.includes.Asset || [], 
      };
    }
    return null;
  } catch (error) {
    console.error(`Error fetching post by slug (${slug}) from Contentful:`, error);
    return null;
  }
}

// Next.js 페이지에서 사용할 수 있도록 함수를 내보냅니다.
module.exports = {
  getAllPosts,
  getPostBySlug
};