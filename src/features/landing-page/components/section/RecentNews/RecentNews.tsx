import {
  Box,
  Center,
  Grid,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import type { BaseProps } from "utils/common-types";
import { SectionContainer } from "features/landing-page";
import Image from "next/image";
import Link from "next/link";

import styles from "./RecentNews.module.scss";

interface RecentNewsProps extends BaseProps {}

const dummyData = [
  {
    id: "2134",
    thumbnailUrl: "https://picsum.photos/seed/ramadhan/640/480",
    title: "Bantuan Dana Bulan Ramadhan",
    slug: "Amet cursus platea duis ut in facilisi sit. Vestibulum malesuada nulla purus lacus, arcu nisl. Neque volutpat aliquam pharetra, sed in velit urna.",
  },
  {
    id: "15512",
    thumbnailUrl: "https://picsum.photos/seed/work/640/480",
    title: "Kerja Bakti Menjelang Lebaran",
    slug: "Facilisis elit neque sit massa leo iaculis. Fringilla consequat, augue orci hac at est in dictum nisi. Eu senectus dignissim aliquam, tincidunt quis viverra. Odio mauris in id interdum aliquet interdum.",
  },
  {
    id: "123123",
    thumbnailUrl: "https://picsum.photos/seed/infaq/640/480",
    title: "Pembagian Daging Kurban",
    slug: "Sit a, tortor eget morbi morbi et. Eu etiam at luctus odio urna, erat scelerisque pharetra.",
  },
];

export const RecentNews: FC<RecentNewsProps> = () => {
  const titleFontSize = useBreakpointValue({
    base: "2xl",
    lg: "4xl",
  });

  return (
    <SectionContainer containerProps={{ id: "berita-terbaru", my: "8" }}>
      <VStack spacing="12">
        {/* Title */}
        <Text
          as="h3"
          color="green.500"
          fontWeight="bold"
          fontSize={titleFontSize}
        >
          Berita Terbaru
        </Text>

        {/* Three latest news */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="4">
          {dummyData.map(({ id, thumbnailUrl, title, slug }) => (
            <Link href={`/news/${id}`} passHref>
              <VStack
                spacing="6"
                alignItems="start"
                key={id}
                as="a"
                role="group"
              >
                {/* Image */}
                <Center
                  w="full"
                  rounded="lg"
                  overflow="hidden"
                  className={styles["recent-news-card"]}
                  position="relative"
                  bg="gray.200"
                >
                  {!!thumbnailUrl && (
                    <Image
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      alt={`${title} Figure`}
                      src={thumbnailUrl}
                    />
                  )}
                </Center>

                {/* Title */}
                <Text
                  fontWeight="medium"
                  fontSize="lg"
                  color="gray.700"
                  transitionProperty="color"
                  transitionDuration="250ms"
                  _groupHover={{ color: "green.500" }}
                >
                  {title}
                </Text>

                {/* Slug */}
                <Text fontSize="sm" color="gray.500">
                  {slug}
                </Text>
              </VStack>
            </Link>
          ))}
        </SimpleGrid>
      </VStack>
    </SectionContainer>
  );
};
