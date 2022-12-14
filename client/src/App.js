import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import {
  BrowserRouter,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { Provider } from "react-redux"
import store from "./config/store"
import historyObject from "./routes/historyObject"


import "./styles/main.css";
import { modalProps } from "./utils/modalProps";
import { theme } from "./styles/theme";
import Root from "./routes/Root";

const App = () => {
  return (
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCS theme={theme}>
        <NotificationsProvider position="bottom-right" limit={4}>
          <ModalsProvider modals={{}} modalProps={modalProps}>
            {/* <BrowserRouter> */}
            <HelmetProvider>
              <HistoryRouter history={historyObject}>
                <Root />
              </HistoryRouter>
            </HelmetProvider>
            {/* </BrowserRouter> */}
          </ModalsProvider>
        </NotificationsProvider>
      </MantineProvider>
    </Provider>
  )
};

export default App;
