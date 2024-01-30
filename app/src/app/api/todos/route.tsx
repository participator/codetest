import prisma from "../../../../prisma/lib/prisma"

// PATCH /api/todos
export async function PATCH(request) {
    const ids = await request.json()
    
    const todosUpdatedCount = await prisma.todo.updateMany({
        where: { 
            id: { in: ids }
        },
        data: {
            deleted: true
        }
    })

  return Response.json(todosUpdatedCount)
}

// DELETE /api/todos
export async function DELETE(request) {
  const ids = await request.json()
  
  const todosDeletedCount = await prisma.todo.deleteMany({
    where: { 
        id: { in: ids }
    }
  })

  return Response.json(todosDeletedCount)
}