import { Center, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import type { BaseProps } from "utils/common-types";

import styles from "./NewsPostCard.module.scss";

export interface NewsPostCardProps extends BaseProps {
  newsIdentifier: string;
  thumbnailUrl: string;
  title: string;
  slug: string;
}

export const NewsPostCard: FC<NewsPostCardProps> = ({
  newsIdentifier: id,
  thumbnailUrl,
  title,
  slug,
}) => {
  return (
    <Link href={`/news/${id}`} passHref>
      <VStack spacing="6" alignItems="start" key={id} as="a" role="group">
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
  );
};
