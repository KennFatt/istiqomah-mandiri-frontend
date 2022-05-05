import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  useDisclosure,
  VStack,
  Link as ChakraLink,
  useMediaQuery,
} from "@chakra-ui/react";
import { FC, useRef } from "react";
import { BaseProps } from "utils/common-types";
import Link from "next/link";
import { NAVIGATION_LIST } from "features/landing-page";

interface MobileNavigationProps extends BaseProps {}

/**
 * @private
 */
export const MobileNavigation: FC<MobileNavigationProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [isOnDesktopBreakpoint] = useMediaQuery("(min-width: 992px)");

  const shouldShowDrawer = !isOnDesktopBreakpoint ? isOpen : false;

  return (
    <>
      <IconButton
        aria-label="Toggle Navigation"
        variant="unstyled"
        onClick={onOpen}
        ref={buttonRef}
        icon={<HamburgerIcon />}
        display={{ base: "block", lg: "none" }}
      />

      <Drawer
        isOpen={shouldShowDrawer}
        onClose={onClose}
        finalFocusRef={buttonRef}
        placement="right"
      >
        <DrawerOverlay />
        <DrawerContent>
          <VStack p="2">
            {NAVIGATION_LIST.map((navItem, index) => (
              <Link key={index} href={navItem.href} passHref>
                <ChakraLink
                  p="2"
                  w="full"
                  color="gray.600"
                  fontWeight="medium"
                  display="block"
                  textAlign="center"
                  borderRadius="md"
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
          </VStack>
        </DrawerContent>
      </Drawer>
    </>
  );
};
