import { Flex, Heading } from "@chakra-ui/react";
import type { FC } from "react";
import { BaseProps } from "utils/common-types";
import {
  DesktopNavigation,
  MobileNavigation,
  SectionContainer,
} from "features/landing-page";

interface HeaderProps extends BaseProps {}

/**
 * @private
 */
export const Header: FC<HeaderProps> = () => {
  return (
    <SectionContainer containerProps={{ as: "header" }}>
      <Flex
        align="center"
        justify="space-between"
        px={{ base: 0, lg: "2.5" }}
        py="6"
      >
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
