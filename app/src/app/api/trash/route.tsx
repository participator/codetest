import prisma from "../../../../prisma/lib/prisma"

// DELETE /api/trash
export async function DELETE(request) {
    try {
        const id = await request.json()
        
        const todoDeleted = await prisma.todo.delete({
            where: { id: id },
            select: { id: true }
        })
        
        return Response.json(todoDeleted)
    } catch (error) {
        return Response.error()
    }
}

// PATCH /api/trash
export async function PATCH(request) {
    try {
        const id = await request.json()
        
        const todoRestored = await prisma.todo.update({
            where: { id: id },
            select: { id: true},
            data: { deleted: false }
        })

        return Response.json(todoRestored)
    } catch (error) {
        return Response.error()
    }

}