import "styles/globals.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "utils/chakra-theme";
import type { AppPropsWithLayout } from "utils/common-types";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default MyApp;
