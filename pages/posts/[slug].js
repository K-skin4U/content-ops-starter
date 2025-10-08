import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

export default function Post({ post }) {
  // Rich text rendering options
  const renderOptions = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a 
            href={node.data.uri} 
            target="_blank" 
            rel="noopener noreferrer"
            className="product-link"
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          box-shadow: 0 10px 50px rgba(0, 0, 0, 0.1);
        }

        header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 60px 40px;
          text-align: center;
        }

        header h1 {
          font-size: 2.5em;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .date {
          font-size: 0.9em;
          opacity: 0.9;
        }

        .hero-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          display: block;
        }

        .content {
          padding: 50px 40px;
        }

        .intro {
          background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
          padding: 30px;
          border-radius: 15px;
          margin-bottom: 40px;
          border-left: 5px solid #ff6b6b;
        }

        .intro h2 {
          color: #2c3e50;
          margin-bottom: 15px;
          font-size: 1.8em;
        }

        .intro p {
          font-size: 1.1em;
          color: #34495e;
        }

        .serum-card {
          background: white;
          border-radius: 20px;
          padding: 35px;
          margin-bottom: 30px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          border: 2px solid #f0f0f0;
          transition: transform 0.3s, box-shadow 0.3s;
          position: relative;
          overflow: hidden;
        }

        .serum-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 5px;
          height: 100%;
          background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
        }

        .serum-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(102, 126, 234, 0.2);
        }

        .rank-badge {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-weight: bold;
          font-size: 0.9em;
          margin-bottom: 15px;
        }

        .best-badge {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          font-size: 1em;
          padding: 10px 25px;
        }

        .serum-card h3 {
          color: #2c3e50;
          font-size: 1.5em;
          margin-bottom: 15px;
          line-height: 1.4;
        }

        .description {
          color: #555;
          margin-bottom: 20px;
          line-height: 1.8;
        }

        .features {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 10px;
          margin: 20px 0;
        }

        .features h4 {
          color: #667eea;
          margin-bottom: 10px;
          font-size: 1.1em;
        }

        .features ul {
          list-style: none;
          padding-left: 0;
        }

        .features li {
          padding: 8px 0;
          padding-left: 25px;
          position: relative;
        }

        .features li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
        }

        .buy-button {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 15px 35px;
          text-decoration: none;
          border-radius: 30px;
          font-weight: bold;
          transition: transform 0.3s, box-shadow 0.3s;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .buy-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
        }

        .cta-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 50px 40px;
          text-align: center;
          color: white;
          margin-top: 50px;
        }

        .cta-section h2 {
          font-size: 2em;
          margin-bottom: 20px;
        }

        .cta-section p {
          font-size: 1.1em;
          margin-bottom: 30px;
          opacity: 0.9;
        }

        .cta-button {
          display: inline-block;
          background: white;
          color: #667eea;
          padding: 18px 45px;
          text-decoration: none;
          border-radius: 30px;
          font-weight: bold;
          font-size: 1.1em;
          transition: transform 0.3s, box-shadow 0.3s;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        }

        .cta-button:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        }

        .disclaimer {
          font-size: 0.85em;
          margin-top: 20px;
          opacity: 0.8;
        }

        footer {
          background: #2c3e50;
          color: white;
          text-align: center;
          padding: 30px;
        }

        @media (max-width: 768px) {
          header h1 {
            font-size: 1.8em;
          }

          .content {
            padding: 30px 20px;
          }

          .serum-card {
            padding: 25px;
          }
        }
      `}</style>

      <div className="container">
        <header>
          <h1>🌟 {post.title} 🌟</h1>
          <p className="date">Published: {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </header>

        {post.heroImage && (
          <img 
            src={`https:${post.heroImage.fields.file.url}`}
            alt={post.title}
            className="hero-image"
          />
        )}

        <div className="content">
          <div className="intro">
            <h2>Carefully Selected by K-skin4U</h2>
            <p>The heat is fading away, and the cool, clear skies are a welcome sight, aren't they? But the season your skin hates the most has arrived. To ensure your skin stays hydrated and glowing, we've compiled five of the best face serums for this fall. Each product has been carefully tested and reviewed to bring you the ultimate skincare solutions.</p>
          </div>

          {/* Product #5 */}
          <div className="serum-card">
            <span className="rank-badge">#5</span>
            <h3>COSRX 6X Peptide Collagen Booster Toner Serum</h3>
            <p className="description">This innovative dual-function product works as both a toner and serum, packed with six types of peptides to boost collagen production. Perfect for those looking to improve skin elasticity and reduce fine lines while maintaining optimal hydration levels.</p>
            <div className="features">
              <h4>Key Benefits:</h4>
              <ul>
                <li>6 types of peptides for enhanced collagen synthesis</li>
                <li>Lightweight, fast-absorbing formula</li>
                <li>Improves skin firmness and elasticity</li>
                <li>Suitable for all skin types</li>
              </ul>
            </div>
            <a href="https://amzn.to/48CQY6f" className="buy-button" target="_blank" rel="noopener noreferrer">View Product →</a>
          </div>

          {/* Product #4 */}
          <div className="serum-card">
            <span className="rank-badge">#4</span>
            <h3>SeoulCeuticals Korean Skin Care 20% Vitamin C Hyaluronic Acid Serum</h3>
            <p className="description">A powerhouse brightening serum featuring a potent 20% vitamin C concentration combined with hyaluronic acid. This Korean beauty favorite targets dark spots, uneven skin tone, and dullness while providing deep hydration for a radiant, youthful glow.</p>
            <div className="features">
              <h4>Key Benefits:</h4>
              <ul>
                <li>High-potency 20% vitamin C for maximum brightening</li>
                <li>Hyaluronic acid for intense hydration</li>
                <li>Reduces hyperpigmentation and dark spots</li>
                <li>Anti-aging properties with antioxidant protection</li>
              </ul>
            </div>
            <a href="https://amzn.to/3Wrkm7X" className="buy-button" target="_blank" rel="noopener noreferrer">View Product →</a>
          </div>

          {/* Product #3 */}
          <div className="serum-card">
            <span className="rank-badge">#3</span>
            <h3>Beauty of Joseon Glow Serum - Propolis and Niacinamide</h3>
            <p className="description">A cult-favorite K-beauty serum that combines the healing power of propolis with the brightening effects of niacinamide. This gentle yet effective formula soothes irritation, controls sebum production, and delivers a natural, healthy glow to all skin types.</p>
            <div className="features">
              <h4>Key Benefits:</h4>
              <ul>
                <li>60% propolis extract for healing and nourishment</li>
                <li>2% niacinamide for brightening and pore refinement</li>
                <li>Calms inflammation and redness</li>
                <li>Lightweight honey-like texture</li>
              </ul>
            </div>
            <a href="https://amzn.to/436PEVi" className="buy-button" target="_blank" rel="noopener noreferrer">View Product →</a>
          </div>

          {/* Product #2 */}
          <div className="serum-card">
            <span className="rank-badge">#2</span>
            <h3>COSRX Niacinamide 15% Peptide Booster Set</h3>
            <p className="description">An advanced skincare solution featuring a high concentration of 15% niacinamide combined with peptide technology. This powerful duo tackles multiple skin concerns including enlarged pores, uneven texture, dullness, and loss of firmness, making it an excellent choice for comprehensive skin improvement.</p>
            <div className="features">
              <h4>Key Benefits:</h4>
              <ul>
                <li>15% niacinamide for superior pore refinement</li>
                <li>Peptide complex for anti-aging benefits</li>
                <li>Minimizes appearance of enlarged pores</li>
                <li>Improves overall skin texture and tone</li>
              </ul>
            </div>
            <a href="https://amzn.to/3IXLybk" className="buy-button" target="_blank" rel="noopener noreferrer">View Product →</a>
          </div>

          {/* Product #1 */}
          <div className="serum-card">
            <span className="best-badge">🏆 #1 BEST CHOICE</span>
            <h3>Sulwhasoo First Care Activating Serum</h3>
            <p className="description">The ultimate luxury Korean skincare experience. This premium first treatment serum is formulated with JAUM Balancing Complex™ and precious Korean herbal ingredients that have been fermented to enhance their efficacy. It prepares your skin to absorb subsequent products better while providing anti-aging, brightening, and hydrating benefits all in one elegant formula.</p>
            <div className="features">
              <h4>Key Benefits:</h4>
              <ul>
                <li>JAUM Balancing Complex™ with 5 precious Korean herbs</li>
                <li>Enhances absorption of subsequent skincare products</li>
                <li>Provides comprehensive anti-aging care</li>
                <li>Brightens and evens skin tone</li>
                <li>Deeply hydrates without heaviness</li>
                <li>Luxurious texture and elegant herbal scent</li>
              </ul>
            </div>
            <a href="https://amzn.to/4h01p5V" className="buy-button" target="_blank" rel="noopener noreferrer">View Product →</a>
          </div>
        </div>

        <div className="cta-section">
          <h2>🛒 Ready to Transform Your Skin?</h2>
          <p>Don't miss out on these amazing serums. Click below to explore all our recommendations and find your perfect match!</p>
          <a href={post.affiliateLink || "https://amzn.to/4mTcjLQ"} className="cta-button" target="_blank" rel="nofollow noopener noreferrer">Shop All Products Now</a>
          <p className="disclaimer">* This page may contain affiliate links. We may earn a commission from purchases made through these links at no extra cost to you.</p>
        </div>

        <footer>
          <p>&copy; 2025 K-skin4U. All rights reserved.</p>
          <p>Your trusted source for Korean skincare recommendations</p>
        </footer>
      </div>
    </>
  );
}

// getStaticProps와 getStaticPaths는 기존 코드 유지
export async function getStaticProps({ params }) {
  // 기존 Contentful 데이터 fetching 로직 유지
  // ...
}

export async function getStaticPaths() {
  // 기존 경로 생성 로직 유지
  // ...
}