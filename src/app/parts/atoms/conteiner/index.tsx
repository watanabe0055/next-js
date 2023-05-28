import React, { ReactNode } from "react";

type AppContainerProps = {
  children: ReactNode;
};

export const AppContainer: React.FC<AppContainerProps> = (props) => {
  return (
    <>
      <div className="m-3">{props.children}</div>
    </>
  );
};
