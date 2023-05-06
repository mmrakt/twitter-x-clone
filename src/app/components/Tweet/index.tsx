"use client";

import React from "react";
import styled from "styled-components";
import timeline from "../../../data/timeline.json";
import Card from "./Card";

const StyledTimeline = styled.ul``;
const Timeline: React.FC = () => {
  const { data } = timeline;
  return (
    <StyledTimeline>
      {Object.entries(data).map((tweet) => (
        <Card key={tweet[0]} {...tweet[1]} />
      ))}
    </StyledTimeline>
  );
};

export default Timeline;
