import { Divider, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import type { FC } from "react";
import type { BaseProps } from "utils/common-types";
import { SectionContainer } from "features/landing-page";

interface FooterProps extends BaseProps {}

/**
 * @private
 */
export const Footer: FC<FooterProps> = () => {
  const fontSize = useBreakpointValue({
    base: "xs",
    lg: "md",
  });

  return (
    <SectionContainer containerProps={{ as: "footer", p: "6" }}>
      <VStack spacing="5" alignItems="start">
        <Divider bg="gray.200" />
        <Text color="gray.600" fontSize={fontSize}>
          IstiqomahMandiri © 2022
        </Text>
      </VStack>
    </SectionContainer>
  );
};
