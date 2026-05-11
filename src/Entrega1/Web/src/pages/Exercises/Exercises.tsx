import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ExerciseCard from "../../components/ExerciseCard"

const mockExercicios = [
  {
    id_exercicio: 1,
    titulo: "Alongamento Cervical",
    descricao: "Exercício para mobilização e alongamento da região cervical.",
    orientacoes: "Executar 3 séries de 30 segundos, 2x ao dia.",
    exericios_tags: [{ tags: { tag: "RPG" } }, { tags: { tag: "Cervical" } }],
    imagens_exercicios: [{ link_imagem: "https://placehold.co/280x280?text=Cervical" }]
  },
  {
    id_exercicio: 2,
    titulo: "Fortalecimento Lombar",
    descricao: "Exercício focado no fortalecimento da musculatura lombar.",
    orientacoes: "Executar 10 repetições, 3 séries.",
    exericios_tags: [{ tags: { tag: "Lombar" } }],
    imagens_exercicios: []
  },
  {
    id_exercicio: 3,
    titulo: "Respiração Diafragmática",
    descricao: "Técnica de respiração para relaxamento e postura.",
    orientacoes: "Inspirar profundamente pelo nariz, expirar lentamente pela boca. 5 minutos.",
    exericios_tags: [{ tags: { tag: "RPG" } }, { tags: { tag: "Respiração" } }],
    imagens_exercicios: [{ link_imagem: "https://placehold.co/280x280?text=Respiração" }]
  }
]

function Exercises() {
  const navigate = useNavigate()
  const [busca, setBusca] = useState("")
  const [exercicios, setExercicios] = useState(mockExercicios)

  const exerciciosFiltrados = exercicios.filter(e =>
    e.titulo.toLowerCase().includes(busca.toLowerCase()) ||
    e.exericios_tags.some(et => et.tags.tag.toLowerCase().includes(busca.toLowerCase()))
  )

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>

      <h2 className="text-center mb-4" style={{ color: "#3EBAD2", fontWeight: "bold", letterSpacing: "2px" }}>
        EXERCICIOS
      </h2>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <input
          type="text"
          placeholder="Pesquisar por título ou tag"
          className="form-control"
          style={{ borderRadius: "8px", maxWidth: "400px" }}
          value={busca}
          onChange={e => setBusca(e.target.value)}
        />
        <button
          onClick={() => navigate("/exercicios/new")}
          style={{ backgroundColor: "#01577A", color: "white", border: "none", borderRadius: "8px", padding: "8px 20px", fontWeight: "500", cursor: "pointer" }}
        >
          + Novo Exercício
        </button>
      </div>

      {exerciciosFiltrados.length === 0 && (
        <div className="text-center" style={{ color: "#777", marginTop: "32px" }}>
          Nenhum exercício encontrado.
        </div>
      )}

      <div className="d-flex flex-column gap-3">
        {exerciciosFiltrados.map(exercicio => (
          <ExerciseCard
            key={exercicio.id_exercicio}
            exercicio={exercicio}
            onDeletar={() => setExercicios(prev => prev.filter(e => e.id_exercicio !== exercicio.id_exercicio))}
          />
        ))}
      </div>

    </div>
  )
}

export default Exercises
