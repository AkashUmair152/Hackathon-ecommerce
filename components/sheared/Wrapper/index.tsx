import React, { FC } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="max-w-8xl mx-auto md:px-24 py-8">{children}</div>;
};

export default Wrapper;
