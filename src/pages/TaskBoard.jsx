import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Box, Container, Heading, VStack, SimpleGrid, Text } from '@chakra-ui/react';

const ItemTypes = {
  TASK: 'task',
};

const initialTasks = {
  'todo': [
    'Set up project repository',
    'Create initial project structure',
    'Implement authentication',
    'Design database schema',
    'Develop API endpoints',
    'Create frontend layout',
    'Integrate frontend with backend',
    'Write unit tests',
    'Perform code review',
    'Deploy to staging environment',
    'Conduct user testing',
    'Deploy to production'
  ],
  'inProgress': [],
  'done': []
};

const Task = ({ task, index, moveTask }) => {
  const [, ref] = useDrag({
    type: ItemTypes.TASK,
    item: { task, index },
  });

  return (
    <Box
      ref={ref}
      bg="white"
      p={4}
      mb={4}
      borderRadius="md"
      boxShadow="md"
    >
      <Text>{task}</Text>
    </Box>
  );
};

const Column = ({ columnId, tasks, moveTask }) => {
  const [, ref] = useDrop({
    accept: ItemTypes.TASK,
    drop: (item) => moveTask(item.index, columnId),
  });

  return (
    <Box
      ref={ref}
      bg="gray.100"
      p={4}
      borderRadius="md"
      minH="400px"
    >
      <Heading as="h2" size="md" mb={4} textAlign="center">
        {columnId === 'todo' ? 'To Do' : columnId === 'inProgress' ? 'In Progress' : 'Done'}
      </Heading>
      {tasks.map((task, index) => (
        <Task key={task} task={task} index={index} moveTask={moveTask} />
      ))}
    </Box>
  );
};

const TaskBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const moveTask = (taskIndex, destinationColumnId) => {
    const sourceColumnId = Object.keys(tasks).find(columnId =>
      tasks[columnId].includes(tasks[destinationColumnId][taskIndex])
    );

    const sourceColumn = tasks[sourceColumnId];
    const destColumn = tasks[destinationColumnId];
    const [removed] = sourceColumn.splice(taskIndex, 1);
    destColumn.push(removed);

    setTasks({
      ...tasks,
      [sourceColumnId]: sourceColumn,
      [destinationColumnId]: destColumn
    });
  };

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Task Board
        </Heading>
        <DndProvider backend={HTML5Backend}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {Object.keys(tasks).map((columnId) => (
              <Column key={columnId} columnId={columnId} tasks={tasks[columnId]} moveTask={moveTask} />
            ))}
          </SimpleGrid>
        </DndProvider>
      </VStack>
    </Container>
  );
};

export default TaskBoard;