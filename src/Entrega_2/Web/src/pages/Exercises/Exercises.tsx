import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { listarExercicios, deletarExercicio } from "../../services/exercicios"
import type { ExercicioItem } from "../../types"
import { ApiError } from "../../services/api"
import { useAuth } from "../../context/AuthContext"
import ExerciseCard from "../../components/ExerciseCard"
import PasswordModal from "../../components/PasswordModal"

function Exercises() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [busca, setBusca] = useState("")
  const [exercicios, setExercicios] = useState<ExercicioItem[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState("")

  const [alvoDelete, setAlvoDelete] = useState<ExercicioItem | null>(null)
  const [senha, setSenha] = useState("")
  const [deleteErro, setDeleteErro] = useState("")
  const [deleteLoading, setDeleteLoading] = useState(false)

  useEffect(() => {
    listarExercicios()
      .then(setExercicios)
      .catch(() => setErro("Erro ao carregar exercícios."))
      .finally(() => setLoading(false))
  }, [])

  const exerciciosFiltrados = exercicios.filter(e =>
    e.titulo.toLowerCase().includes(busca.toLowerCase()) ||
    e.exericios_tags.some(et => et.tags.tag.toLowerCase().includes(busca.toLowerCase()))
  )

  const abrirModal = (exercicio: ExercicioItem) => {
    setAlvoDelete(exercicio)
    setSenha("")
    setDeleteErro("")
  }

  const fecharModal = () => {
    setAlvoDelete(null)
    setSenha("")
    setDeleteErro("")
  }

  const confirmarDelete = async () => {
    if (!alvoDelete || !user?.email) return
    setDeleteErro("")
    setDeleteLoading(true)
    try {
      await deletarExercicio(alvoDelete.id_exercicio, user.email, senha)
      setExercicios(prev => prev.filter(e => e.id_exercicio !== alvoDelete.id_exercicio))
      fecharModal()
    } catch (e) {
        if (e instanceof ApiError && e.status === 401) {
          setDeleteErro("Senha incorreta.")
        }else if (e instanceof ApiError && e.status === 404) {
          setDeleteErro("Usuário não encontrado.")
        }
        else if (e instanceof ApiError){
          setDeleteErro(`Erro ${e.status}: ${e.message}`)
        }        
        else setDeleteErro("Erro de conexão.")
    } finally {
      setDeleteLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>

      <h2 className="text-center mb-4" style={{ color: "#3EBAD2", fontWeight: "bold", letterSpacing: "2px"}}>
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
          style={{ backgroundColor: "#01577A", color: "white", border: "none",borderRadius: "8px", padding: "8px 20px", fontWeight: "500", cursor:"pointer" }}
        >
          + Novo Exercício
        </button>
      </div>

      {loading && (
        <div className="text-center" style={{ color: "#777", marginTop: "32px" }}>
          Carregando exercícios...
        </div>
      )}

      {erro && (
        <div style={{ backgroundColor: "#fdecea", border: "1px solid #EE715F", borderRadius: "8px", padding: "10px 14px",color: "#EE715F" , fontSize: "14px" }}>
          {erro}
        </div>
      )}

      {!loading && !erro && exerciciosFiltrados.length === 0 && (
        <div className="text-center" style={{ color: "#777", marginTop: "32px" }}>
          Nenhum exercício encontrado.
        </div>
      )}

      <div className="d-flex flex-column gap-3">
        {exerciciosFiltrados.map(exercicio => (
          <ExerciseCard
            key={exercicio.id_exercicio}
            exercicio={exercicio}
            onDeletar={() => abrirModal(exercicio)}
          />
        ))}
      </div>

      {alvoDelete && (
        <PasswordModal
          tituloItem={alvoDelete.titulo}
          senha={senha}
          onChangeSenha={setSenha}
          erro={deleteErro}
          loading={deleteLoading}
          onConfirmar={confirmarDelete}
          onCancelar={fecharModal}
        />
      )}

    </div>
  )
}

export default Exercises
