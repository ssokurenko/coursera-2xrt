import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return imageSrc ? <VStack background="white" color="black" textAlign="left">
    <Image src={imageSrc} alt={title} />
    <VStack padding="1rem">
      <Heading>{title}</Heading>
      <Text>{description}</Text>
      <HStack>
        <Text>See more</Text>&nbsp;<FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  </VStack> : null
};

export default Card;
