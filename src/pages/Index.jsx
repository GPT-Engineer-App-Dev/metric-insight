import { Box, Container, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Business Dashboard
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          <Stat>
            <StatLabel>Revenue</StatLabel>
            <StatNumber>$50,000</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              23.36%
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>New Users</StatLabel>
            <StatNumber>1,200</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              5.4%
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Churn Rate</StatLabel>
            <StatNumber>2.5%</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              1.2%
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Customer Satisfaction</StatLabel>
            <StatNumber>89%</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              3.8%
            </StatHelpText>
          </Stat>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;