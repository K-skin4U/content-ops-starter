import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

export default function Post({ post }) {
  // Rich Text 렌더링 옵션 (간단한 설명용)
  const simpleRenderOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="benefits-list">{children}</ul>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    },
  };

  // 제품 카드 컴포넌트
  const ProductCard = ({ rank, title, description, image, benefits, link, isBest }) => (
    <div className={`product-card ${isBest ? 'best-product' : ''}`}>
      {/* 순위 배지 */}
      <div className="rank-badge-container">
        <span className={`rank-badge ${isBest ? 'best' : ''}`}>
          {isBest ? '🏆 1위 - BEST' : `${rank}위`}
        </span>
      </div>

      {/* 제품 제목 */}
      <h2 className="product-title">{title}</h2>

      {/* 제품 이미지 */}
      {image && (
        <img
          src={`https:${image.fields.file.url}`}
          alt={title}
          className="product-image"
        />
      )}

      {/* 제품 설명 */}
      {description && (
        <div className="product-description">
          {documentToReactComponents(description, simpleRenderOptions)}
        </div>
      )}

      {/* Key Benefits */}
      {benefits && (
        <div className="benefits-section">
          <h3 className="benefits-title">✨ Key Benefits</h3>
          <div className="benefits-content">
            {documentToReactComponents(benefits, simpleRenderOptions)}
          </div>
        </div>
      )}

      {/* 구매 버튼 */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="buy-button"
        >
          🛒 View Product
        </a>
      )}
    </div>
  );

  return (
    <div className="page-container">
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          line-height: 1.7;
          color: #333;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .page-container {
          max-width: 1000px;
          margin: 0 auto;
          background: white;
          box-shadow: 0 10px 50px rgba(0,0,0,0.1);
          min-height: 100vh;
        }

        /* Hero Header */
        .hero-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 60px 40px 40px;
          text-align: center;
          position: relative;
        }

        .hero-header::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 30px;
          background: white;
          border-radius: 30px 30px 0 0;
        }

        .brand-badge {
          display: inline-block;
          background: rgba(255,255,255,0.25);
          padding: 8px 24px;
          border-radius: 25px;
          font-size: 0.9em;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 2.8em;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .hero-date {
          opacity: 0.95;
          font-size: 1em;
        }

        .hero-image {
          width: 100%;
          height: 450px;
          object-fit: cover;
          display: block;
        }

        /* 콘텐츠 영역 */
        .content-wrapper {
          padding: 50px 40px;
        }

        .intro-section {
          margin-bottom: 50px;
          font-size: 1.1em;
          line-height: 1.8;
          color: #555;
        }

        /* 제품 카드 */
        .product-card {
          margin: 40px 0;
          padding: 40px;
          background: white;
          border-radius: 20px;
          border: 2px solid #f0f0f0;
          transition: all 0.4s ease;
        }

        .product-card:hover {
          border-color: #667eea;
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.15);
          transform: translateY(-5px);
        }

        .product-card.best-product {
          border: 3px solid #f5576c;
          background: linear-gradient(135deg, #fff9fb 0%, #fff5f7 100%);
        }

        .rank-badge-container {
          margin-bottom: 25px;
        }

        .rank-badge {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 12px 28px;
          border-radius: 30px;
          font-weight: 700;
          font-size: 1.3em;
        }

        .rank-badge.best {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          font-size: 1.5em;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .product-title {
          font-size: 1.8em;
          margin: 20px 0;
          color: #2c3e50;
          font-weight: 700;
        }

        .product-image {
          width: 100%;
          border-radius: 12px;
          margin: 20px 0;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .product-description {
          font-size: 1.05em;
          line-height: 1.9;
          color: #555;
          margin: 20px 0;
        }

        .benefits-section {
          background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
          padding: 25px;
          border-radius: 12px;
          margin: 25px 0;
        }

        .benefits-title {
          color: #667eea;
          font-size: 1.3em;
          margin-bottom: 15px;
        }

        .benefits-content {
          color: #444;
        }

        .benefits-list {
          list-style: none;
          padding: 0;
        }

        .benefits-list li {
          padding: 12px 0 12px 35px;
          position: relative;
          font-size: 1.05em;
        }

        .benefits-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
          font-size: 1.3em;
          top: 8px;
        }

        .buy-button {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 16px 45px;
          border-radius: 35px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.1em;
          transition: all 0.3s ease;
          margin: 20px 0;
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.3);
        }

        .buy-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 30px rgba(102, 126, 234, 0.4);
        }

        /* Final CTA */
        .final-cta {
          margin-top: 70px;
          padding: 50px 40px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          text-align: center;
          color: white;
        }

        .final-cta h2 {
          font-size: 2.3em;
          margin-bottom: 30px;
        }

        .final-cta-disclaimer {
          font-size: 0.9em;
          margin-top: 20px;
          opacity: 0.85;
        }

        /* 반응형 */
        @media (max-width: 768px) {
          .hero-header {
            padding: 40px 20px 30px;
          }
          
          .hero-title {
            font-size: 2em;
          }
          
          .content-wrapper {
            padding: 30px 20px;
          }
          
          .product-card {
            padding: 25px 20px;
          }
          
          .rank-badge {
            font-size: 1.1em;
            padding: 10px 20px;
          }
          
          .product-title {
            font-size: 1.5em;
          }
        }
      `}</style>

      <main>
        {/* Hero Header */}
        <div className="hero-header">
          <div className="brand-badge">✨ Carefully selected by K-skin4U</div>
          <h1 className="hero-title">🌟 {post.title} 🌟</h1>
          <p className="hero-date">
            발행일: {new Date(post.date).toLocaleDateString('ko-KR')}
          </p>
        </div>

        {/* Hero Image */}
        {post.heroImage && (
          <img
            src={`https:${post.heroImage.fields.file.url}`}
            alt={post.title}
            className="hero-image"
          />
        )}

        {/* Content Area */}
        <div className="content-wrapper">
          {/* 인트로 섹션 (기존 content 필드 사용) */}
          {post.content && (
            <div className="intro-section">
              {documentToReactComponents(post.content, simpleRenderOptions)}
            </div>
          )}

          {/* 제품 #1 */}
          <ProductCard
            rank={1}
            title={post.product1Title || "Product #1"}
            description={post.product1Description}
            image={post.product1Image}
            benefits={post.product1KeyBenefits}
            link={post.product1AffiliateLink}
            isBest={true}
          />

          {/* 제품 #2 */}
          <ProductCard
            rank={2}
            title={post.product2Title || "Product #2"}
            description={post.product2Description}
            image={post.product2Image}
            benefits={post.product2KeyBenefits}
            link={post.product2AffiliateLink}
          />

          {/* 제품 #3 */}
          <ProductCard
            rank={3}
            title={post.product3Title || "Product #3"}
            description={post.product3Description}
            image={post.product3Image}
            benefits={post.product3KeyBenefits}
            link={post.product3AffiliateLink}
          />

          {/* 제품 #4 */}
          <ProductCard
            rank={4}
            title={post.product4Title || "Product #4"}
            description={post.product4Description}
            image={post.product4Image}
            benefits={post.product4KeyBenefits}
            link={post.product4AffiliateLink}
          />

          {/* 제품 #5 */}
          <ProductCard
            rank={5}
            title={post.product5Title || "Product #5"}
            description={post.product5Description}
            image={post.product5Image}
            benefits={post.product5KeyBenefits}
            link={post.product5AffiliateLink}
          />

          {/* Final CTA */}
          <div className="final-cta">
            <h2>🛒 지금 바로 구매하러 가기</h2>
            {post.affiliateLink && (
              <>
                <a
                  href={post.affiliateLink}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="buy-button"
                >
                  제품 구매 사이트 바로가기
                </a>
                <p className="final-cta-disclaimer">
                  * 본 링크는 제휴 링크일 수 있습니다.
                </p>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

// getStaticProps와 getStaticPaths는 기존과 동일
export async function getStaticProps({ params }) {
  const { getPostBySlug } = require('../../lib/posts');
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const { getAllPosts } = require('../../lib/posts');
  const posts = await getAllPosts();
  
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
