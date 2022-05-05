import { Box, Container } from "@chakra-ui/react";
import type { FC } from "react";
import type { BaseProps } from "utils/common-types";
import { Footer, Header } from "features/landing-page";

export interface LandingPageLayoutProps extends BaseProps {}

export const LandingPageLayout: FC<LandingPageLayoutProps> = ({ children }) => {
  return (
    <Container bg="gray.50" maxW="full" p="0">
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
