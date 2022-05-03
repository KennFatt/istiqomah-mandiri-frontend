import { Box, Flex, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { BaseProps } from "utils/common-types";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { SectionContainer } from "./SectionContainer";

interface HeaderProps extends BaseProps {}

/**
 * @private
 */
export const Header: FC<HeaderProps> = () => {
  return (
    <SectionContainer containerProps={{ as: "header" }}>
      <Flex align="center" justify="space-between" px="2.5" py="6">
        {/* Branding */}
        <Heading as="h3" fontFamily="branding" color="green.500">
          IstiqomahMandiri
        </Heading>

        {/* Navigations */}
        <DesktopNavigation />
        <MobileNavigation />
      </Flex>
    </SectionContainer>
  );
};
