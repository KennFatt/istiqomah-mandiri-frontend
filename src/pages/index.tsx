import {
  Center,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import {
  Hero,
  InfaqFinder,
  LandingPageLayout,
  SectionContainer,
} from "features/landing-page";

import type { NextPageWithLayout } from "utils/common-types";

const Home: NextPageWithLayout = () => {
  const subtitleFontSize = useBreakpointValue({
    base: "xl",
    lg: "2xl",
  });

  const titleFontSize = useBreakpointValue({
    base: "2xl",
    lg: "4xl",
  });

  return (
    <>
      <Hero />
      <InfaqFinder />

      <SectionContainer containerProps={{ bg: "white", py: "12", my: "8" }}>
        <Stack direction={{ base: "column", sm: "row" }} spacing="4">
          {/* LHS: Title */}
          <Center w={{ base: "full", sm: "50%" }} justifyContent="start">
            <VStack alignItems="start" spacing="2">
              <Text
                fontWeight="medium"
                fontSize={subtitleFontSize}
                color="gray.600"
              >
                Tentang
              </Text>

              <Text
                fontWeight="semibold"
                fontSize={titleFontSize}
                color="green.500"
              >
                Apa Itu Istiqomah Mandiri?
              </Text>
            </VStack>
          </Center>

          {/* RHS: Content */}
          <VStack
            w={{ base: "full", sm: "50%" }}
            color="gray.600"
            spacing="5"
            alignItems="start"
          >
            <Text>
              Minim laborum magna et sunt velit aute. Id veniam est
              reprehenderit commodo labore labore dolor elit. Irure exercitation
              aute cillum minim aliquip cillum. Occaecat est deserunt incididunt
              anim nulla sit quis elit id amet cillum officia dolore. Qui sunt
              incididunt aute nisi ex exercitation fugiat laborum sint irure sit
              nisi.
            </Text>

            <Text>
              Duis nostrud amet aliquip ad. Adipisicing voluptate id do pariatur
              reprehenderit est occaecat deserunt et officia adipisicing. Mollit
              dolore est anim esse ipsum exercitation dolor non Lorem.
            </Text>

            <Text>
              Nostrud magna adipisicing exercitation aliquip nulla laboris esse
              proident. Consequat labore mollit ullamco ullamco. Est sit sint
              esse enim aliqua.
            </Text>
          </VStack>
        </Stack>
      </SectionContainer>
    </>
  );
};

Home.getLayout = (page) => <LandingPageLayout>{page}</LandingPageLayout>;

export default Home;
