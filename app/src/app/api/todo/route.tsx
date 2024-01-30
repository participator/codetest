import prisma from "../../../../prisma/lib/prisma"

// GET /api/todo
export async function GET() {
  // Get todos from db
  const todos = await prisma.todo.findMany()

  return Response.json(todos)
}

// POST /api/todo
export async function POST(request) {
  const todo = await request.json()

  // send todo to db
  const created = await prisma.todo.create({
    data: todo
  })

  return Response.json(JSON.stringify(created))
}

// PUT /api/todo
export async function PUT(request) {
  const todo = await request.json()
  const {id} = todo

  const updated = await prisma.todo.update({
    where: { id: id},
    data: {
      ...todo,
      dateCreated: new Date(todo.dateCreated),
      dateModified: new Date(todo.dateModified)
    }
  })

  return Response.json(updated)
}

// PATCH /api/todo
export async function PATCH(request) {
  const id = await request.json()

  const softDeletedTodo = await prisma.todo.update({
    where: { id: id },
    data: {
      deleted: true
    }
  })

  return Response.json(softDeletedTodo.id)
  
}