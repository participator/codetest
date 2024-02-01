import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const todoData: Prisma.TodoCreateInput[] = [
  {
    title: 'Discover Full Stack Engineer position with Roaming Hunger',
    description: `Read about job description.\nGet excited about Roaming Hunger in the job description.\nRead more about Roaming Hunger on company's website.`,
    dateCreated: new Date('2024-01-18')
  },
  {
    title: 'Complete the application',
    description: 'Create a thoughtful cover letter.',
    dateCreated: new Date('2024-01-18')
  },
  {
    title: 'Get contacted by the People & Culture Coordinator',
    description: `Become really excited.\nSchedule a chat with the People & Culture Coordinator to learn about the Roaming Hunger and the role.`,
    dateCreated: new Date('2024-01-19')
  },
  {
    title: 'Chat with the People & Culture Coordinator',
    description: `Learn about the company.\nLearn that culture is higher priority than technological knowledge.\nLearn more details about RMNG.\nShare my experience and personality.\nBecome estatic about the opportunity.`,
    dateCreated: new Date('2024-01-22')
  },
  {
    title: 'Receive code test',
    description: 'Read Readme',
    dateCreated: new Date('2024-01-22')
  },
  {
    title: 'Start code test',
    description: 'Create Design (https://codetestdesign.framer.website/). Create Data model (https://docs.google.com/drawings/d/1UTzKAbcyrbcMjdFivp7HZZyDQtH8KJqhrUsU35pSmus). Start repo.',
    dateCreated: new Date('2024-01-24')
  },
  {
    title: 'Complete code test',
    description: 'Many turns but the app is completed!',
    dateCreated: new Date('2024-01-29')
  },
  {
    title: 'Deploy code test',
    description: 'Deply to cloud provider like Vercel or Google Cloud\'s Cloud Run.',
    dateCreated: new Date('2024-01-29')
  },
  {
    title: 'Onboarding to Roaming Hunger as a Full Stack Developer',
    description: 'First day working as a Full Stack Developer with Roaming Hunger!',
    dateCreated: new Date('2024-02-19')
  },
  {
    title: 'Max description length',
    description: 'hMGX8DLOMQ73L6nLmY8Z4KA9f3wXmEnbqsrh4I8J3n1JD1CUdEPU3fJAf1y0mjLY7DkZbIOJbSZmGDuurRG2B32J5guGD1CTY1xH14L4EP7CqlkmeW0tyPIjRUUmOJwlDDhI3j22EceV7lI64xzCtY9uLtjD7ZC80RIVsiJOwBe02uoefyB4tHFNIIRy5I3tz25CEAEoeddBwaY3Q7ulFXTwUCLbO6s9yLPH7RKUG3i6jcHN2UcOi0Q978TqDxPfAjfNTdQhlZofp2uyHWdYxVfSBkg89vin8TVk5WCRu2ijqpd16nCrviciykPAuZkW9o7x3wtnRsaZ9HOjb0a8sEY35AUpqy0BJ79swqjpbpGdE7WjFC8sbk1TfIR50IlCU0J1GovEwqN3O2IFPY07NGzkJfk40WHJ5i7GK1AUyZcupQBAl8XH0Tn3Q3llPGRxvQQAsewvPvxd4yIXXdtanYjcizSVI1i5RCja5RgGzE27AVEHk8z8',
    dateCreated: new Date('2024-01-31')
  },
  {
    title: 'f2F2vASfckGn38TOQ2LRS1gMcChVx4zbEDF7Eowa1bTWmxuxvB8HnXeQ88oT0Jc0ZFG1t8O1GTlDp0osQn5WCoDI5jbkiEoaJRYM',
    description: 'Max title length',
    dateCreated: new Date('2024-01-31')
  }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const t of todoData) {
    const todo = await prisma.todo.create({
      data: t,
    })
    console.log(`Created todo with id: ${todo.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })