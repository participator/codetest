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

  // Save todo in db
  //const success = await db.save(id, updated)

  return Response.json(updated)
}

export async function DELETE(request) {
  const id = await request.json()
  // delete in db
  // const success = await db.delete(id)
  // return success
  return Response.json("Delete")
}