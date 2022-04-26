import { Box, Container } from "@chakra-ui/react";
import { FC, useMemo } from "react";
import { BaseProps } from "utils/react-fc-props";
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
  const pxProps = useMemo(() => {
    return centerContent ? ["4", "8", null, "12", "16", "32"] : undefined;
  }, [centerContent]);

  const _bgDebugSize = useMemo(() => {
    return _debugSize
      ? ["red.200", "yellow.200", null, "green.200"]
      : undefined;
  }, [_debugSize]);

  return (
    <Container maxW="full" px={pxProps} bg={_bgDebugSize} {...containerProps}>
      <Box w="full" {...boxProps}>
        {children}
      </Box>
    </Container>
  );
};
