import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="custom-margin">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
