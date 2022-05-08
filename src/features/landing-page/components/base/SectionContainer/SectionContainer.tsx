import { Box, Container, useBreakpointValue } from "@chakra-ui/react";
import type { FC } from "react";
import type { BaseProps } from "utils/common-types";
import type { ContainerProps, BoxProps } from "@chakra-ui/react";

export interface SectionContainerProps extends BaseProps {
  containerProps?: ContainerProps;
  boxProps?: BoxProps;

  centerContent?: boolean;

  /** @private used to show custom color for some breakpoints */
  _debugSize?: boolean;
}

export const SectionContainer: FC<SectionContainerProps> = ({
  boxProps,
  containerProps,
  children,
  centerContent = true,
  _debugSize = false,
}) => {
  const controlledContainerPx = useBreakpointValue({
    base: "4",
    sm: "8",
    lg: "12",
    xl: "16",
    "2xl": "32",
    "3xl": "72",
  });
  const pxProps = centerContent ? controlledContainerPx : undefined;

  const controlledBackgroundDebugSize = useBreakpointValue({
    base: "red.200",
    sm: "orange.200",
    md: "purple.200",
    lg: "green.200",
    xl: "blue.200",
    "2xl": "teal.200",
    "3xl": "cyan.200",
  });
  const _bgDebugSize = _debugSize ? controlledBackgroundDebugSize : undefined;

  return (
    <Container maxW="full" px={pxProps} bg={_bgDebugSize} {...containerProps}>
      <Box w="full" {...boxProps}>
        {children}
      </Box>
    </Container>
  );
};
