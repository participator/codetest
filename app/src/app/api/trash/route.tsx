import prisma from "../../../../prisma/lib/prisma"

// DELETE /api/trash
export async function DELETE(request) {
    const id = await request.json()
    // Get todos from db
    const todoDeleted = await prisma.todo.delete({
        where: { id: id },
        select: { id: true }
    })

    return Response.json(todoDeleted)
}

// PATCH /api/trash
export async function PATCH(request) {
    const id = await request.json()

    const todoRestored = await prisma.todo.update({
        where: { id: id },
        select: { id: true},
        data: { deleted: false }
    })

    return Response.json(todoRestored)
}