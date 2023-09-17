import "@/styles/globals.css";
import Main from "../components/Main";
import Navbar from "@/components/Navbar";
export default function App({ Component, pageProps }) {
  return (
    <>
    
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}
