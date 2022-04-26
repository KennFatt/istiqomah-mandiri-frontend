import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FC, useRef } from "react";
import { BaseProps } from "utils/react-fc-props";

interface MobileNavigationProps extends BaseProps {}

export const MobileNavigation: FC<MobileNavigationProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

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
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={buttonRef}
        placement="right"
      >
        <DrawerOverlay />
        <DrawerContent>{/* TODO */}</DrawerContent>
      </Drawer>
    </>
  );
};
