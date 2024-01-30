import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const todoData: Prisma.TodoCreateInput[] = [
  {
    title: 'Discover Full Stack Engineer position with Roaming Hunger via job email list',
    description: `Read about job description
                    Get excited about Roaming Hunger in the job description
                    Read more about Roaming Hunger on company's website`,
    dateCreated: new Date('2024-01-18')
  },
  {
    title: 'Complete the application',
    description: 'Create a thoughtful cover letter',
    dateCreated: new Date('2024-01-18')
  },
  {
    title: 'Get contacted by the People & Culture Coordinator',
    description: `Become really excited
                    Schedule a chat with the People & Culture Coordinator to learn about the Roaming Hunger and the role`,
    dateCreated: new Date('2024-01-19')
  },
  {
    title: 'Chat with the People & Culture Coordinator',
    description: `Learn about the company
                    Learn that culture is higher priority than technological knowledge
                    Learn more details about RMNG
                    Share my experience and personality
                    Become estatic about the opportunity`,
    dateCreated: new Date('2024-01-22')
  },
  {
    title: 'Receive code test',
    description: 'Read Readme',
    dateCreated: new Date('2024-01-22')
  },
  {
    title: 'Start code test',
    description: 'Create Design (https://codetestdesign.framer.website/), Create Data model (https://docs.google.com/drawings/d/1UTzKAbcyrbcMjdFivp7HZZyDQtH8KJqhrUsU35pSmus), Start repo',
    dateCreated: new Date('2024-01-24')
  },
  {
    title: 'Complete code test',
    description: 'Many turns but the app is completed!',
    dateCreated: new Date('2024-01-29')
  },
  {
    title: 'Deploy code test',
    description: 'Try to deply to cloud provider like Vercel or Google Cloud\'s Cloud Run',
    dateCreated: new Date('2024-01-29')
  },
  {
    title: 'Onboarding to Roaming Hunger as a Full Stack Developer',
    description: 'First day working as a Full Stack Developer with Roaming Hunger!',
    dateCreated: new Date('2024-02-19')
  },
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