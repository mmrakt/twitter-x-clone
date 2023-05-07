import React from "react";
import Image from "next/image";
import styled from "styled-components";

const StyledCard = styled.article`
  position: relative;
  .link {
    position: absolute;
    inset: 0;
  }
  .container {
    padding: 20px;
    display: flex;
    align-items: start;
    border-bottom: 1px solid #ddd;
  }
  .icon > img {
    border-radius: 50%;
  }
  .body {
    margin-left: 20px;
    .row1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > p {
        gap: 5px;
      }
      .name {
        font-weight: bold;
      }
      .id {
        color: #bbb;
        font-weight: bold;
        margin-left: 5px;
      }
      time {
        color: #bbb;
        > span {
          font-size: 12px;
        }
      }
      .control {
        position: relative;
        z-index: 100;
        float: right;
        background: none;
        border: none;
        padding: 5px;
      }
    }
    .reactionList {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .reactionItem {
      background: none;
      border: none;
      display: flex;
      z-index: 100;
      position: relative;
      padding: 3px;
      span {
        margin-left: 5px;
      }
    }
  }
  .content {
    white-space: pre-wrap;
  }
`;
type IProps = {
  accountIcon: string;
  accountName: string;
  accountId: string;
  tweetDate: string;
  content: string;
  comments: number;
  retweets: number;
  likes: number;
};

const Card: React.FC<IProps> = (props) => {
  const {
    accountIcon,
    accountName,
    accountId,
    tweetDate,
    content,
    comments,
    retweets,
    likes,
  } = props;
  return (
    <StyledCard>
      <a href="" className="link"></a>
      <div className="container">
        <div className="icon">
          <Image src={`/images/${accountIcon}`} alt="" width={70} height={70} />
        </div>
        <div className="body">
          <div className="row1">
            <p className="">
              <span className="name">{accountName}</span>
              <span className="id">@{accountId}</span>
              <time>
                <span>・</span>
                {tweetDate}
              </time>
            </p>
            <button className="control">
              <Image src="/images/ellipsis.png" alt="" width={20} height={20} />
            </button>
          </div>
          <div className="content">{`${content}`}</div>
          <div className="reactionList">
            <button className="reactionItem">
              <Image src="/images/comment.png" alt="" width={20} height={20} />
              {comments !== 0 && <span>{comments}</span>}
            </button>
            <button className="reactionItem">
              <Image src="/images/retweet.png" alt="" width={20} height={20} />
              {retweets !== 0 && <span>{retweets}</span>}
            </button>
            <button className="reactionItem">
              <Image src="/images/like.png" alt="" width={20} height={20} />
              {likes !== 0 && <span>{likes}</span>}
            </button>
            <button className="reactionItem">
              <Image src="/images/share.png" alt="" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
