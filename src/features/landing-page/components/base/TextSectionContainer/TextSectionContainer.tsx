import type { BaseProps } from "utils/common-types";
import { SectionContainerProps, SectionContainer } from "features/landing-page";
import type { FC, ReactNode } from "react";
import React from "react";
import {
  Box,
  Center,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

export interface TextSectionContainerProps
  extends BaseProps,
    SectionContainerProps {
  /**
   * Title is the text with primary color and has bigger font size.
   * Subtitle is the smaller text with gray color.
   *
   * Subtitle will always be placed on top of the tilte (for at this moment).
   */
  title: string;
  subtitle?: string;

  /**
   * Content should be a valid React component and it will be placed
   *  on the right hand side of the section. Whilst on the left hand side
   *  will be a title and subtitle.
   *
   * If there is no content given, it will render empty `<Box>` component instead.
   */
  content?: ReactNode;
}

export const TextSectionContainer: FC<TextSectionContainerProps> = ({
  title,
  subtitle = "",
  content,
  containerProps,
}) => {
  const subtitleFontSize = useBreakpointValue({
    base: "xl",
    lg: "2xl",
  });

  const titleFontSize = useBreakpointValue({
    base: "2xl",
    lg: "4xl",
  });

  const hasValidContent =
    content !== undefined && React.isValidElement(content);

  return (
    <SectionContainer
      containerProps={{ bg: "white", py: "12", my: "8", ...containerProps }}
    >
      <Stack direction={{ base: "column", sm: "row" }} spacing="4">
        {/* LHS: Title and subtitle */}
        <Center w={{ base: "full", sm: "50%" }} justifyContent="start">
          <VStack alignItems="start" spacing="2">
            <Text
              fontWeight="medium"
              fontSize={subtitleFontSize}
              color="gray.600"
            >
              {subtitle}
            </Text>

            <Text
              fontWeight="semibold"
              fontSize={titleFontSize}
              color="green.500"
            >
              {title}
            </Text>
          </VStack>
        </Center>

        {/* RHS: Content */}
        {hasValidContent ? content : <Box />}
      </Stack>
    </SectionContainer>
  );
};
