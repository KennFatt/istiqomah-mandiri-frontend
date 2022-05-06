import type { FC } from "react";
import type { BaseProps } from "utils/common-types";
import { TextSectionContainer } from "features/landing-page";
import { Text, VStack } from "@chakra-ui/react";

interface AboutProps extends BaseProps {}

export const About: FC<AboutProps> = () => {
  return (
    <TextSectionContainer
      title="Apa Itu Istiqomah Mandiri?"
      subtitle="Tentang"
      containerProps={{ id: "tentang" }}
      content={
        <VStack
          w={{ base: "full", sm: "50%" }}
          color="gray.600"
          spacing="5"
          alignItems="start"
        >
          <Text>
            Minim laborum magna et sunt velit aute. Id veniam est reprehenderit
            commodo labore labore dolor elit. Irure exercitation aute cillum
            minim aliquip cillum. Occaecat est deserunt incididunt anim nulla
            sit quis elit id amet cillum officia dolore. Qui sunt incididunt
            aute nisi ex exercitation fugiat laborum sint irure sit nisi.
          </Text>

          <Text>
            Duis nostrud amet aliquip ad. Adipisicing voluptate id do pariatur
            reprehenderit est occaecat deserunt et officia adipisicing. Mollit
            dolore est anim esse ipsum exercitation dolor non Lorem.
          </Text>

          <Text>
            Nostrud magna adipisicing exercitation aliquip nulla laboris esse
            proident. Consequat labore mollit ullamco ullamco. Est sit sint esse
            enim aliqua.
          </Text>
        </VStack>
      }
    />
  );
};
