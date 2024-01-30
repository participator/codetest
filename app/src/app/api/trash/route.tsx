import prisma from "../../../../prisma/lib/prisma"

// DELETE /api/todo
export async function DELETE(request) {
    const id = await request.json()
    // Get todos from db
    const todoDeleted = await prisma.todo.delete({
        where: { id: id },
        select: { id: true }
    })

    return Response.json(todoDeleted)
}