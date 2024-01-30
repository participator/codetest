import prisma from "../../../../prisma/lib/prisma"

// DELETE /api/trash
export async function DELETE(request) {
    const id = await request.json()
    let todoDeleted
    
    try {
        todoDeleted = await prisma.todo.delete({
            where: { id: id },
            select: { id: true }
        })
    } catch (error) {
        return Response.json(error)
    }

    return Response.json(todoDeleted)
}

// PATCH /api/trash
export async function PATCH(request) {
    let todoRestored

    try {
        const id = await request.json()
        
        todoRestored = await prisma.todo.update({
            where: { id: id },
            select: { id: true},
            data: { deleted: false }
        })
    } catch (error) {
        return Response.json(error)
    }

    return Response.json(todoRestored)
}