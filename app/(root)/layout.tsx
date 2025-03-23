import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1 className="text-2xl font-bold">(Root) Layout</h1>
      {children}
    </>
  );
};
export default Layout;
