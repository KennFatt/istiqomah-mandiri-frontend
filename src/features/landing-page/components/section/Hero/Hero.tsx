import {
  Button,
  Center,
  HStack,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import type { FC } from "react";
import type { BaseProps } from "utils/common-types";
import { SectionContainer } from "features/landing-page";

import styles from "./Hero.module.scss";

interface HeroProps extends BaseProps {}

/**
 * Landing Page's hero section.
 */
export const Hero: FC<HeroProps> = () => {
  /** Responsive CTA button size props */
  const ctaButtonSize = useBreakpointValue({ base: "sm", lg: "md", xl: "lg" });

  /** Hero headline font size */
  const headlineFontSize = useBreakpointValue({
    base: "xl",
    lg: "2xl",
    xl: "3xl",
  });

  return (
    <SectionContainer
      containerProps={{
        bg: "rgba(240, 255, 244, .25)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <SectionContainer
        containerProps={{
          position: "relative",
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          zIndex: 1,
        }}
      >
        <Stack direction={{ base: "column", sm: "row" }} spacing="4">
          {/* LHS: CTA */}
          <Center w="full" justifyContent="start" py={{ base: "6", sm: 0 }}>
            <VStack alignItems="start" spacing="6">
              <Text
                as="h1"
                color="green.500"
                fontWeight="semibold"
                fontSize={headlineFontSize}
                maxW={{ base: "xs", sm: "initial" }}
              >
                Program Untuk Membantu Proses Meninggal Dunia Keluarga Anda
              </Text>

              <HStack spacing="4">
                <Button
                  size={ctaButtonSize}
                  variant="solid"
                  bg="green.500"
                  color="white"
                  _hover={{ bg: "green.400" }}
                >
                  Gabung Sekarang
                </Button>

                <Button
                  size={ctaButtonSize}
                  variant="outline"
                  borderColor="green.500"
                  color="gray.600"
                  _hover={{ bg: "green.50" }}
                >
                  Lihat Cara Kerja
                </Button>
              </HStack>
            </VStack>
          </Center>

          {/* RHS: Illustration */}
          <Center w="full">
            <Image
              src="/assets/landing-page/hero-illustration.svg"
              maxW={{ base: "96", lg: "full" }}
              w={{ lg: "full" }}
              style={{
                userSelect: "none",
                pointerEvents: "none",
              }}
            />
          </Center>
        </Stack>
      </SectionContainer>

      {/* Wave decoration */}
      <img
        alt="Wave decoration"
        src="/assets/landing-page/hero-wave.svg"
        className={styles["hero-wave"]}
      />
    </SectionContainer>
  );
};
