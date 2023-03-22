import Header from "@/components/layouts/header/header";
import Footer from "@/components/layouts/footer/footer";
import "@/styles/globals.scss";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "@/redux/reducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Footer />
    </>
  );
}
