import prisma from "../../../../prisma/lib/prisma"

// GET /api/todo
export async function GET() {
  try {
    const todos = await prisma.todo.findMany()

    return Response.json(todos)
  } catch (error) {
    console.error(error)
    return Response.error()
  }

}

// POST /api/todo
export async function POST(request) {
  try {
    const todo = await request.json()

    const created = await prisma.todo.create({
      data: todo
    })
    
    return Response.json(JSON.stringify(created))
  } catch (error) {
    console.error(error)
    return Response.error()
  }

}

// PUT /api/todo
export async function PUT(request) {
  try {
    const todo = await request.json()
    const { id } = todo

    const updated = await prisma.todo.update({
      where: { id: id },
      data: {
        ...todo,
        dateCreated: new Date(todo.dateCreated),
        dateModified: new Date(todo.dateModified)
      }
    })

    return Response.json(updated)
  } catch (error) {
    console.error(error)
    return Response.error()
  }
}

// PATCH /api/todo
export async function PATCH(request) {
  try {
    const id = await request.json()

    const softDeletedTodo = await prisma.todo.update({
      where: { id: id },
      data: {
        deleted: true
      }
    })

    return Response.json(softDeletedTodo.id)

  } catch (error) {
    console.error(error)
    return Response.error()
  }
}