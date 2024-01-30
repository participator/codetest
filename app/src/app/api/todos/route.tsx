import prisma from "../../../../prisma/lib/prisma"

// PATCH /api/todos
export async function PATCH(request) {
  let todosUpdatedCount
  try {
    const ids = await request.json()
    
    todosUpdatedCount = await prisma.todo.updateMany({
        where: { 
            id: { in: ids }
        },
        data: {
            deleted: true
        }
    })    
  } catch (error) {
    return Response.json(error)
  }

  return Response.json(todosUpdatedCount)
}

// DELETE /api/todos
export async function DELETE(request) {
  let todosDeletedCount
  
  try {
    const ids = await request.json()
    
    todosDeletedCount = await prisma.todo.deleteMany({
      where: { 
          id: { in: ids }
      }
    })
  } catch (error) {
    return Response.json(error)
  }

  return Response.json(todosDeletedCount)
}