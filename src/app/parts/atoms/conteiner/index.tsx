import React, { ReactNode } from "react";

type AppContainerProps = {
  children: ReactNode;
};

export const AppContainer: React.FC<AppContainerProps> = (props) => {
  return (
    <>
      <div>{props.children}</div>
    </>
  );
};
