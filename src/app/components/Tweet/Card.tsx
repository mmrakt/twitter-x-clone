import React from "react";

type IProps = {
  accountIcon: string;
  accountName: string;
  accountId: string;
  tweetDate: string;
  content: string;
  comments: string;
  retweets: string;
  likes: string;
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
    <div className="">
      <div className="">{content}</div>
    </div>
  );
};

export default Card;
