import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <div className="site-wrapper">
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Playfair Display', 'Georgia', serif;
          background: #fafafa;
          color: #2c2c2c;
          line-height: 1.6;
        }

        .site-wrapper {
          min-height: 100vh;
        }

        /* Header */
        .site-header {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          padding: 60px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .site-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.5;
        }

        .header-content {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
        }

        .site-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 8px 24px;
          border-radius: 30px;
          font-size: 0.85rem;
          color: #ffffff;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .site-title {
          font-size: 3.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 15px;
          letter-spacing: -1px;
        }

        .site-tagline {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          font-family: 'Lato', sans-serif;
          font-weight: 300;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Main Content */
        .main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 20px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 2.5rem;
          color: #2c2c2c;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #666;
          font-family: 'Lato', sans-serif;
          font-weight: 300;
        }

        /* Articles Grid */
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 40px;
        }

        .article-card {
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          cursor: pointer;
        }

        .article-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .article-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .article-card:hover::before {
          transform: scaleX(1);
        }

        .article-image-wrapper {
          position: relative;
          width: 100%;
          height: 240px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          overflow: hidden;
        }

        .article-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .article-card:hover .article-image {
          transform: scale(1.08);
        }

        .article-content {
          padding: 30px;
        }

        .article-meta {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
          font-size: 0.85rem;
          color: #999;
          font-family: 'Lato', sans-serif;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .article-date {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .article-date::before {
          content: '📅';
          font-size: 0.9rem;
        }

        .article-category {
          background: #f0f0f0;
          padding: 4px 12px;
          border-radius: 20px;
          font-weight: 500;
          color: #667eea;
        }

        .article-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #2c2c2c;
          margin-bottom: 12px;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .article-excerpt {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.7;
          margin-bottom: 20px;
          font-family: 'Lato', sans-serif;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .read-more {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #667eea;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          font-family: 'Lato', sans-serif;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: gap 0.3s ease;
        }

        .read-more:hover {
          gap: 12px;
        }

        .read-more::after {
          content: '→';
          font-size: 1.2rem;
        }

        /* Featured Article (첫 번째 글) */
        .featured-article {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.12);
          margin-bottom: 40px;
          transition: all 0.4s ease;
          border: 2px solid transparent;
        }

        .featured-article:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 40px rgba(102, 126, 234, 0.2);
          border-color: #667eea;
        }

        .featured-image-wrapper {
          width: 100%;
          height: 400px;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .featured-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .featured-article:hover .featured-image {
          transform: scale(1.05);
        }

        .featured-content {
          padding: 40px;
        }

        .featured-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 8px 18px;
          border-radius: 25px;
          font-size: 0.75rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
          font-weight: 600;
          font-family: 'Lato', sans-serif;
        }

        .featured-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 15px;
          line-height: 1.3;
          color: #2c2c2c;
        }

        .featured-meta {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
          font-size: 0.85rem;
          color: #999;
          font-family: 'Lato', sans-serif;
        }

        .featured-meta span {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .featured-excerpt {
          font-size: 1rem;
          line-height: 1.8;
          margin-bottom: 25px;
          color: #666;
          font-family: 'Lato', sans-serif;
        }

        .featured-read-more {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          font-family: 'Lato', sans-serif;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          font-size: 0.85rem;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .featured-read-more:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(102, 126, 234, 0.4);
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 80px 20px;
          color: #999;
        }

        .empty-state-icon {
          font-size: 4rem;
          margin-bottom: 20px;
        }

        .empty-state-title {
          font-size: 1.5rem;
          color: #666;
          margin-bottom: 10px;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .featured-article {
            grid-template-columns: 1fr;
          }

          .featured-content {
            padding: 40px 30px;
          }

          .featured-title {
            font-size: 2rem;
          }

          .site-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .articles-grid {
            grid-template-columns: 1fr;
          }

          .site-title {
            font-size: 2rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .featured-image-wrapper {
            min-height: 300px;
          }
        }

        /* Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');
      `}</style>

      {/* Header */}
      <header className="site-header">
        <div className="header-content">
          <div className="site-badge">Expert Reviews</div>
          <h1 className="site-title">K-Skin4U</h1>
          <p className="site-tagline">
            Professional Korean Skincare Reviews & Beauty Insights
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="section-header">
          <h2 className="section-title">Latest Reviews</h2>
          <p className="section-subtitle">
            Expert analysis of the best Korean beauty products
          </p>
        </div>

        {posts && posts.length > 0 ? (
          <div className="articles-grid">
            {posts.map((post, index) => {
              const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });

              // 첫 번째 글은 Featured로
              if (index === 0) {
                return (
                  <Link 
                    href={`/posts/${post.slug}`} 
                    key={post.slug}
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="featured-article">
                      <div className="featured-image-wrapper">
                        <div className="featured-image" style={{
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                        }} />
                      </div>
                      <div className="featured-content">
                        <div className="featured-badge">⭐ Featured Review</div>
                        <h3 className="featured-title">{post.title}</h3>
                        <div className="featured-meta">
                          <span>📅 {formattedDate}</span>
                          <span>•</span>
                          <span>✨ Editor's Choice</span>
                        </div>
                        <p className="featured-excerpt">
                          Discover our top-rated Korean skincare products with in-depth analysis and expert recommendations.
                        </p>
                        <span className="featured-read-more">
                          Read Full Review →
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              }

              // 나머지 글들
              return (
                <Link 
                  href={`/posts/${post.slug}`} 
                  key={post.slug}
                  style={{ textDecoration: 'none' }}
                >
                  <article className="article-card">
                    <div className="article-image-wrapper">
                      <div className="article-image" style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      }} />
                    </div>
                    <div className="article-content">
                      <div className="article-meta">
                        <span className="article-date">{formattedDate}</span>
                        <span className="article-category">Review</span>
                      </div>
                      <h3 className="article-title">{post.title}</h3>
                      <p className="article-excerpt">
                        Expert review and comprehensive analysis of premium Korean beauty products.
                      </p>
                      <span className="read-more">Read Review</span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">✨</div>
            <h3 className="empty-state-title">No articles yet</h3>
            <p>New beauty reviews coming soon!</p>
          </div>
        )}
      </main>
    </div>
  );
}

// 데이터 가져오기
export async function getStaticProps() {
  const { getAllPosts } = require('../lib/posts');
  const posts = await getAllPosts();

  return {
    props: {
      posts: posts || [],
    },
    revalidate: 60,
  };
}
