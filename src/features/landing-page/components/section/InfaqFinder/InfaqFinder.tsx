import {
  Box,
  Button,
  Divider,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { ChangeEvent, FC, KeyboardEvent, useCallback, useState } from "react";
import type { BaseProps } from "utils/common-types";
import { SectionContainer } from "features/landing-page";

interface InfaqFinderProps extends BaseProps {}

export const InfaqFinder: FC<InfaqFinderProps> = () => {
  /** Card title and description font size */
  const fontSize = useBreakpointValue({
    base: "xs",
    lg: "md",
    xl: "xl",
  });

  /** Input group's children font size (placeholder and button text) */
  const inputSize = useBreakpointValue({
    base: "md",
    lg: "lg",
  });

  const [nomorIndukValue, setNomorIndukValue] = useState("");

  /** Input change's handler */
  const onNomorIndukChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    setNomorIndukValue(inputValue || "");
  }, []);

  /** Input key press handler; it'll fire `onButtonCariClicked` when the key pressed is "Enter" */
  const onNomorIndukEnterKeyPressed = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const pressedKey = e.code;
      if (pressedKey === "Enter") {
        onButtonCariClicked();
      }
    },
    [nomorIndukValue]
  );

  /** Button click handler and also when the User manually pressing "Enter" key */
  const onButtonCariClicked = useCallback(() => {
    /** TODO */
    alert(nomorIndukValue);
  }, [nomorIndukValue]);

  /** Input field's button */
  const inputRightAddon = (
    <Button
      bg="green.500"
      _hover={{ bg: "green.400" }}
      color="white"
      fontSize={fontSize}
      h="full"
      rounded="none"
      onClick={onButtonCariClicked}
    >
      Cari
    </Button>
  );

  return (
    <SectionContainer>
      <Box
        p="6"
        bg="white"
        rounded="md"
        shadow="md"
        position="relative"
        zIndex="1"
        mt={{ base: "-20", sm: "-16" }}
      >
        <VStack spacing="4" alignItems="start" fontSize={fontSize}>
          <VStack alignItems="start">
            <Text fontWeight="semibold" color="gray.700">
              Informasi Infaq Keluarga
            </Text>
            <Text color="gray.600">
              Masukkan Nomor Induk keluarga Anda untuk melihat informasi terkait
              Infaq.
            </Text>
          </VStack>

          <Divider bg="gray.200" />

          <InputGroup size={inputSize}>
            <Input
              fontSize={fontSize}
              placeholder="Nomor Induk Keluarga (Contoh: 0023)"
              onChange={onNomorIndukChange}
              onKeyDownCapture={onNomorIndukEnterKeyPressed}
            />
            <InputRightAddon
              children={inputRightAddon}
              p="0"
              overflow="hidden"
            />
          </InputGroup>
        </VStack>
      </Box>
    </SectionContainer>
  );
};
