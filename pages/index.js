// pages/index.js (수정된 블로그 홈: 모든 게시글 목록)

import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '../lib/posts';

export default function BlogHome({ posts }) {
  if (!posts || posts.length === 0) {
    return <h1>게시글이 없습니다. Contentful에 첫 글을 발행해주세요!</h1>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>나의 Contentful 블로그</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map((post) => (
          // 🚨 수정된 부분: <a> 태그를 제거하고, <Link>에 직접 스타일 적용 🚨
          <li key={post.slug} style={{ borderBottom: '1px solid #eee', padding: '15px 0' }}>
            <Link 
              href={`/posts/${post.slug}`}
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <h2>{post.title}</h2>
              <p style={{ fontSize: '14px', color: '#666' }}>발행일: {new Date(post.date).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}