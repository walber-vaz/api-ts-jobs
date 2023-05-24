import { randomUUID } from 'node:crypto';

import { type QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('jobs', [
      {
        id: randomUUID(),
        title: 'Senior Software Engineer',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet enim`,
        company: 'Google',
        salary: 100000,
        languages: ['JavaScript', 'TypeScript', 'Python'],
        location: 'London',
        role: 'Full Stack',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: randomUUID(),
        title: 'Junior Software Engineer',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet enim`,
        company: 'Facebook',
        salary: 50000,
        languages: ['JavaScript', 'TypeScript', 'Python'],
        location: 'London',
        role: 'Front End',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('jobs', {});
  },
};
