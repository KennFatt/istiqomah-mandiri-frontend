import { SimpleGrid, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import type { FC } from "react";
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
          {DUMMY_NEWS_LIST.map(({ id, thumbnailUrl, title, slug }, index) => (
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
