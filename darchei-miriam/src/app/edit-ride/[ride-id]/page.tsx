export default function EditRide({ params }: { params: { id: string } }) {
    console.log(`editing ride id:${params.id}`);
    return <>
      <h1>Editing ride id: {params.id} </h1>
    </>
  }