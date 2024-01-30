
// GET /api/todo
export function GET() {
  // Get todos from db
  const todos = [{
    id: 0,
    date: 'Jan 24, 2024',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    deleted: false,
    done: true,
    title: "Start Code Test",
  },
  {
    id: 1,
    date: 'Jan 28, 2024',
    description: "Some more Ipsum",
    deleted: false,
    done: false,
    title: "Complete Code Test",
  },
  {
    id: 2,
    date: 'Jan 28, 2024',
    description: "Some mmore more Ipsum",
    deleted: false,
    done: false,
    title: "Complete Code Test Again",
  }]

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