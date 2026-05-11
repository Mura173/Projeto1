
interface ExercicioItem {
  id_exercicio: number
  titulo: string
  descricao: string
  orientacoes: string
  exericios_tags: Array<{ tags: { tag: string } }>
  imagens_exercicios: Array<{ link_imagem: string }>
}

interface Props {
  exercicio: ExercicioItem
  onDeletar: () => void
}

function ExerciseCard({ exercicio, onDeletar }: Props) {
  return (
    <div style={{ backgroundColor: "#f5f5f5", borderRadius: "12px", padding: "16px 24px", border: "1px solid #e0e0e0" }}>
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <div style={{ fontWeight: "bold", fontSize: "18px", color: "#01577A" }}>
            {exercicio.titulo}
          </div>
          <div style={{ color: "#555", marginTop: "4px" }}>
            {exercicio.descricao}
          </div>
          <div style={{ color: "#777", fontSize: "14px", marginTop: "4px" }}>
            {exercicio.orientacoes}
          </div>
          <div className="d-flex gap-2 mt-2 flex-wrap">
            {exercicio.exericios_tags.map(et => (
              <span
                key={et.tags.tag}
                style={{ backgroundColor: "#3EBAD2", color: "white", borderRadius: "20px", padding: "2px 12px", fontSize: "13px" }}
              >
                {et.tags.tag}
              </span>
            ))}
          </div>
        </div>
        <div className="d-flex gap-2">
          <button
            onClick={onDeletar}
            style={{ backgroundColor: "#EE715F", color: "white", border: "none", borderRadius: "8px", padding: "6px 16px", fontWeight: "500", cursor: "pointer", fontSize: "14px" }}
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ExerciseCard
