import { HStack, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import type { BaseProps } from "utils/common-types";
import { NAVIGATION_LIST } from "features/landing-page/navigation-list";

interface DesktopNavigationProps extends BaseProps {}

/**
 * @private
 */
export const DesktopNavigation: FC<DesktopNavigationProps> = () => {
  return (
    <HStack spacing="12" display={{ base: "none", lg: "flex" }}>
      {NAVIGATION_LIST.map((navItem, index) => (
        <Link key={index} href={navItem.href} passHref>
          <ChakraLink
            color="gray.600"
            fontWeight="medium"
            _hover={{
              cursor: "pointer",
              color: "gray.700",
              transition: "color",
              transitionDuration: "500ms",
            }}
          >
            {navItem.name}
          </ChakraLink>
        </Link>
      ))}
    </HStack>
  );
};
