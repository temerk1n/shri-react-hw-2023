interface MovieProps {
  params: {
    id: string,
  }
}

export default function Movie(props: MovieProps) {
  return (
    <h1>Movie</h1>
  )
}
