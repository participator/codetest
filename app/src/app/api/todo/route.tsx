import prisma from "../../../../prisma/lib/prisma"

// GET /api/todo
export async function GET() {
  // Get todos from db
  const todos = await prisma.todo.findMany()

  return Response.json(todos)
}

export async function POST(request) {
  const todo = await request.json()
  // send todo to db
  // get id
  // send id to frontend

  return Response.json(JSON.stringify(todo))

}

export async function PUT(request) {
  const todo = await request.json()
  const {id} = todo

  // Find todo in db
  // const dbTodo = await db.find(id)
  const updated = {
    ///...dbTodo
    ...todo
  }

  // Save todo in db
  //const success = await db.save(id, updated)

  return Response.json("Updated")
}

export async function DELETE(request) {
  const id = await request.json()
  // delete in db
  // const success = await db.delete(id)
  // return success
  return Response.json("Delete")
}