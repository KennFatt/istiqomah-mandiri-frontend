import { Divider, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { BaseProps } from "utils/common-types";
import { SectionContainer } from "./SectionContainer";

interface FooterProps extends BaseProps {}

/**
 * @private
 */
export const Footer: FC<FooterProps> = () => {
  return (
    <SectionContainer containerProps={{ as: "footer", p: "6" }}>
      <VStack spacing="5" alignItems="start">
        <Divider bg="red.400" />
        <Text color="gray.600">IstiqomahMandiri © 2022</Text>
      </VStack>
    </SectionContainer>
  );
};
