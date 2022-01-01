import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Mahz',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Pooja',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  jobs: [
      {
        name: 'ADOBE',
        position: 'Software engineer',
        vacancy : 10,
        salary: 50000,
        count_applicants: 10,
        description: 'WE ARE IN NEED OF SOFTWARE ENGINEER!!',
      },
      {
        name: 'WALMART',
        position: 'Software engineer',
        vacancy : 10,
        salary: 60000,
        count_applicants: 5,
        description: 'WE ARE IN NEED OF SOFTWARE ENGINEER!!',
      },
      {
        name: 'VISA',
        position: 'Software engineer',
        vacancy : 5,
        salary: 50000,
        count_applicants: 5,
        description: 'WE ARE IN NEED OF SOFTWARE ENGINEER!!',
      },
      {
        name: 'DE SHAW',
        position: 'Technical Analyst',
        vacancy : 5,
        salary: 80000,
        count_applicants: 5,
        description: 'WE ARE IN NEED OF A TECHNICAL ANALYST!!',
      },
      {
        name: 'GOOGLE',
        position: 'Software engineer',
        vacancy : 3,
        salary: 80000,
        count_applicants: 5,
        description: 'WE ARE IN NEED OF SOFTWARE ENGINEER!!',
      },
      {
        name: 'MICROSOFT',
        position: 'Software engineer',
        vacancy : 7,
        salary: 70000,
        count_applicants: 5,
        description: 'WE ARE IN NEED OF SOFTWARE ENGINEER!!',
      },
      {
        name: 'GOLDMAN SACHS',
        position: 'Technical Analyst',
        vacancy : 5,
        salary: 80000,
        count_applicants: 5,
        description: 'WE ARE IN NEED OF A TECHNICAL ANALYST!!',
      },
    ],
};
export default data;