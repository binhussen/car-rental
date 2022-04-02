import Head from "next/head";
import Footer from "../common/footer";
import withHeaderScroll from "../common/withHeaderScroll";
import MainHeader from "./header";

const ScrolledHeader = withHeaderScroll(MainHeader);

function MainLayout({ title, children, headerClass }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ScrolledHeader className={headerClass} />
      {children}
      <Footer/>
    </>
  );
}

export default MainLayout;