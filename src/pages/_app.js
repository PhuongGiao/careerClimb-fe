// import Loading from "@/components/Loading";
import GetUserProvider from "@/components/GetUserProvider/GetUserProvider";
import Loading from "@/components/Loading/Loading";
import Empty from "@/layout/empty";
import store from "@/store/store";
import "@/styles/globals.css";
import { ConfigProvider } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import { Roboto } from "next/font/google";
const poppins = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout ?? Empty;
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);
  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <Provider store={store}>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <GetUserProvider>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#572c0e",
              bgPrimary: "#ffffff",
            },
          }}
        >
          <Layout>
            {pageLoading ? <Loading /> : <Component {...pageProps} />}
          </Layout>
        </ConfigProvider>
      </GetUserProvider>
    </Provider>
  );
}
