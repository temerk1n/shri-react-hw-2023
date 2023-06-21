interface MovieProps {
  id: string,
}

export default function Movie({ id }: MovieProps) {
  return (
    <h1>Movie {id}</h1>
  )
}
