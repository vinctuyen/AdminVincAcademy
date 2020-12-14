import React from "react";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import configureStore from "../redux";
import CommonSnackBar from "../dialogs/common-snackbar";
import ErrorsHandler from "../components/errors-handler";
import hoistNonReactStatics from "hoist-non-react-statics";
import { withTranslation } from "react-i18next";
import "../i18n";
import "../styles/styles.scss";

class _App extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store, router, t } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <CommonSnackBar t={t} />
          <ErrorsHandler />
          <Component {...pageProps} {...router} t={t} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(configureStore)(
  withReduxSaga(hoistNonReactStatics(withTranslation()(_App), _App))
);
