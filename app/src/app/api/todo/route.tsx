import prisma from "../../../../prisma/lib/prisma"

// GET /api/todo
export async function GET() {
  let todos

  try {
    todos = await prisma.todo.findMany()
  } catch (error) {
    return Response.json(error)
  }

  return Response.json(todos)
}

// POST /api/todo
export async function POST(request) {
  let created

  try {
    const todo = await request.json()

    created = await prisma.todo.create({
      data: todo
    })
  } catch (error) {
    return Response.json(error)
  }

  return Response.json(JSON.stringify(created))
}

// PUT /api/todo
export async function PUT(request) {
  let updated

  try {
    const todo = await request.json()
  const {id} = todo

  updated = await prisma.todo.update({
    where: { id: id},
    data: {
      ...todo,
      dateCreated: new Date(todo.dateCreated),
      dateModified: new Date(todo.dateModified)
    }
  })
  } catch (error) {
    return Response.json(error)
  }

  

  return Response.json(updated)
}

// PATCH /api/todo
export async function PATCH(request) {
  let softDeletedTodo

  try {
    const id = await request.json()
    
    softDeletedTodo = await prisma.todo.update({
      where: { id: id },
      data: {
        deleted: true
      }
    })
  } catch (error) {
    return Response.json(error)
  }

  return Response.json(softDeletedTodo.id)
  
}