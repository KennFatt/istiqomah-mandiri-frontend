import { Box, Container } from "@chakra-ui/react";
import type { FC } from "react";
import { BaseProps } from "utils/react-fc-props";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LandingPageLayoutProps extends BaseProps {}

export const LandingPageLayout: FC<LandingPageLayoutProps> = ({ children }) => {
  return (
    <Container bg="gray.50" maxW="full">
      {/* Top level header & navigation */}
      <Header />

      {/* Content */}
      <Box as="main" minH="100vh">
        {children}
      </Box>

      {/* Footer */}
      <Footer />
    </Container>
  );
};
