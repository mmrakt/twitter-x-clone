"use client";

import React from "react";
import timeline from "../../../data/timeline.json";
import Card from "./Card";

const Timeline: React.FC = () => {
  const { data } = timeline;
  return (
    <ul>
      {Object.entries(data).map((tweet) => (
        <Card
          key={tweet[0]}
          accountIcon={tweet[1].accountIcon}
          accountName={tweet[1].accountName}
          accountId={tweet[1].accountId}
          tweetDate={tweet[1].tweetDate}
          content={tweet[1].content}
          comments={parseInt(tweet[1].comments)}
          likes={parseInt(tweet[1].likes)}
          retweets={parseInt(tweet[1].retweets)}
        />
      ))}
    </ul>
  );
};

export default Timeline;
