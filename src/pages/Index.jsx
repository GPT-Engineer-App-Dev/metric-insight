import { Box, Container, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, VStack, Heading } from "@chakra-ui/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', Revenue: 4000, Users: 2400, Churn: 2.4, Satisfaction: 85 },
  { name: 'Feb', Revenue: 3000, Users: 1398, Churn: 2.1, Satisfaction: 87 },
  { name: 'Mar', Revenue: 2000, Users: 9800, Churn: 2.9, Satisfaction: 88 },
  { name: 'Apr', Revenue: 2780, Users: 3908, Churn: 2.0, Satisfaction: 89 },
  { name: 'May', Revenue: 1890, Users: 4800, Churn: 1.8, Satisfaction: 90 },
  { name: 'Jun', Revenue: 2390, Users: 3800, Churn: 2.2, Satisfaction: 91 },
  { name: 'Jul', Revenue: 3490, Users: 4300, Churn: 2.3, Satisfaction: 92 },
];

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
      <Box mt={10}>
          <Heading as="h2" size="lg" textAlign="center" mb={4}>
            Trends
          </Heading>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="Users" stroke="#82ca9d" />
              <Line type="monotone" dataKey="Churn" stroke="#ff7300" />
              <Line type="monotone" dataKey="Satisfaction" stroke="#387908" />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;