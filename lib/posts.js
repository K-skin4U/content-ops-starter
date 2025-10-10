// my-contentful-blog/lib/posts.js

const contentful = require('contentful');

// 클라이언트 초기화
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

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
      
      return {
        // 기본 필드
        slug: post.fields.slug,
        title: post.fields.title,
        date: post.fields.date,
        heroImage: post.fields.heroImage,
        content: post.fields.content, // 인트로 설명용
        affiliateLink: post.fields.affiliateLink, // 최종 CTA용
        
        // 제품 #1
        product1Title: post.fields.product1Title, // ⭐ 새로 추가
        product1Description: post.fields.product1Description,
        product1Image: post.fields.product1Image,
        product1KeyBenefits: post.fields.product1KeyBenefits,
        product1AffiliateLink: post.fields.product1AffiliateLink,
        
        // 제품 #2
        product2Title: post.fields.product2Title, // ⭐ 새로 추가
        product2Description: post.fields.product2Description,
        product2Image: post.fields.product2Image,
        product2KeyBenefits: post.fields.product2KeyBenefits,
        product2AffiliateLink: post.fields.product2AffiliateLink,
        
        // 제품 #3
        product3Title: post.fields.product3Title, // ⭐ 새로 추가
        product3Description: post.fields.product3Description,
        product3Image: post.fields.product3Image,
        product3KeyBenefits: post.fields.product3KeyBenefits,
        product3AffiliateLink: post.fields.product3AffiliateLink,
        
        // 제품 #4
        product4Title: post.fields.product4Title, // ⭐ 새로 추가
        product4Description: post.fields.product4Description,
        product4Image: post.fields.product4Image,
        product4KeyBenefits: post.fields.product4KeyBenefits,
        product4AffiliateLink: post.fields.product4AffiliateLink,
        
        // 제품 #5
        product5Title: post.fields.product5Title, // ⭐ 새로 추가
        product5Description: post.fields.product5Description,
        product5Image: post.fields.product5Image,
        product5KeyBenefits: post.fields.product5KeyBenefits,
        product5AffiliateLink: post.fields.product5AffiliateLink,
        
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
