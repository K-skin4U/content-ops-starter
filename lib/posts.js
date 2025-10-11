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
      select: 'fields.slug,fields.title,fields.date,fields.heroImage', // ⭐ heroImage 추가
      order: '-fields.date', 
    });

    if (entries.items) {
      return entries.items.map(item => ({
        slug: item.fields.slug,
        title: item.fields.title,
        date: item.fields.date,
        heroImage: item.fields.heroImage, // ⭐ 추가
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
  content: post.fields.content || null,
  affiliateLink: post.fields.affiliateLink || null,
  
  // 제품 #1
  product1Title: post.fields.product1Title || null,
  product1Description: post.fields.product1Description || null,
  product1Image: post.fields.product1Image || null,
  product1KeyBenefits: post.fields.product1KeyBenefits || null,
  product1AffiliateLink: post.fields.product1AffiliateLink || null,
  
  // 제품 #2
  product2Title: post.fields.product2Title || null,
  product2Description: post.fields.product2Description || null,
  product2Image: post.fields.product2Image || null,
  product2KeyBenefits: post.fields.product2KeyBenefits || null,
  product2AffiliateLink: post.fields.product2AffiliateLink || null,
  
  // 제품 #3
  product3Title: post.fields.product3Title || null,
  product3Description: post.fields.product3Description || null,
  product3Image: post.fields.product3Image || null,
  product3KeyBenefits: post.fields.product3KeyBenefits || null,
  product3AffiliateLink: post.fields.product3AffiliateLink || null,
  
  // 제품 #4
  product4Title: post.fields.product4Title || null,
  product4Description: post.fields.product4Description || null,
  product4Image: post.fields.product4Image || null,
  product4KeyBenefits: post.fields.product4KeyBenefits || null,
  product4AffiliateLink: post.fields.product4AffiliateLink || null,
  
  // 제품 #5
  product5Title: post.fields.product5Title || null,
  product5Description: post.fields.product5Description || null,
  product5Image: post.fields.product5Image || null,
  product5KeyBenefits: post.fields.product5KeyBenefits || null,
  product5AffiliateLink: post.fields.product5AffiliateLink || null,
  
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
