import React from "react";
import { Title } from "../../atoms/title";
import { Content } from "../../atoms/content";

export const TaskModule = () => {
  return (
    <>
      <div>
        <Title title="test" />
        <Content
          content={
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
          }
        />
      </div>
    </>
  );
};
