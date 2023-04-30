import { socialsData } from "@/data/socialsData";
import { HStack, Icon, Link, useColorModeValue } from "@chakra-ui/react";
import { AttentionSeeker } from "react-awesome-reveal";

function Footer() {
  return (
    <HStack
      justify="flex-start"
      spacing="8"
      color={useColorModeValue("blackAlpha.700", "whiteAlpha.700")}
      fontSize="lg"
      p={2}
      borderRadius={"25px"}
    >
      <AttentionSeeker effect="flash" duration={7000}>
        {socialsData.map((items, key) => {
          return (
            <HStack
              key={key}
              _hover={{
                color: useColorModeValue("black", "white"),
              }}
            >
              <Link
                href={items.url}
                _hover={{
                  color: useColorModeValue("black", "white"),
                }}
              >
                {items.social}
              </Link>
              <Icon as={items.icon} />
            </HStack>
          );
        })}
      </AttentionSeeker>
    </HStack>
  );
}

export default Footer;
