import React from 'react';
import './components/styles.css';

const CommunityAuthor = ({ author, self_introduction, imageUrl, githubUrl }) => {
  return (
    <>
      <div className="authorSection">
        <div className="authorImg">
          <img loading="lazy" src={imageUrl} alt={author} />
        </div>
        <div className="authorDetails">
        <strong>この記事を書いた人</strong>
          <div className="authorName">
          <div className="author">{author}</div>
            {githubUrl ? (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://storage.googleapis.com/graphql-engine-cdn.hasura.io/learn-hasura/assets/social-media/github-icon.svg"
                  alt="Github Icon"
                  aria-label="Github"
                />
              </a>
            ) : null}
          </div>
          <div className="authorDesc">{self_introduction}</div>
        </div>
      </div>
    </>
  );
};

export default CommunityAuthor;
