import { SimpleGrid, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { FC, useMemo } from "react";
import type { BaseProps } from "utils/common-types";
import {
  SectionContainer,
  NewsPostCard,
  DUMMY_NEWS_LIST,
} from "features/landing-page";

interface RecentNewsProps extends BaseProps {}

export const RecentNews: FC<RecentNewsProps> = () => {
  const titleFontSize = useBreakpointValue({
    base: "2xl",
    lg: "4xl",
  });

  /** TODO: use actual data */
  const latestThreeNews = useMemo(
    () => DUMMY_NEWS_LIST.filter((_, index) => index <= 2),
    []
  );

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
          {latestThreeNews.map(({ id, thumbnailUrl, title, slug }, index) => (
            <NewsPostCard
              key={index}
              newsIdentifier={id}
              thumbnailUrl={thumbnailUrl}
              title={title}
              slug={slug}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </SectionContainer>
  );
};
