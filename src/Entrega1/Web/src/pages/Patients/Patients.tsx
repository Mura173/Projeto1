import { useState } from "react"
import { useNavigate } from "react-router-dom"

type FiltroStatus = "todos" | "ativo" | "inativo"

function formatarData(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { timeZone: "UTC" })
}

const mockPacientes = [
  {
    id_paciente: 1,
    is_ativo: true,
    usuarios: { nome: "Ana Paula Souza", data_nascimento: "1990-03-15", telefone: "(11) 98765-4321" },
    prontuarios: [{ id_prontuario: 1, data_inicio_tratamento: "2026-01-10", classificacao: "Moderado" }]
  },
  {
    id_paciente: 2,
    is_ativo: false,
    usuarios: { nome: "Carlos Eduardo Lima", data_nascimento: "1985-07-22", telefone: "(11) 91234-5678" },
    prontuarios: [{ id_prontuario: 2, data_inicio_tratamento: "2025-11-05", classificacao: "Leve" }]
  },
  {
    id_paciente: 3,
    is_ativo: true,
    usuarios: { nome: "Fernanda Oliveira", data_nascimento: "1998-12-01", telefone: "(21) 99876-5432" },
    prontuarios: [{ id_prontuario: 3, data_inicio_tratamento: "2026-02-20", classificacao: "Grave" }]
  }
]

function Patients() {
  const navigate = useNavigate()
  const [busca, setBusca] = useState("")
  const [filtroStatus, setFiltroStatus] = useState<FiltroStatus>("todos")

  const pacientesFiltrados = mockPacientes.filter(p => {
    const matchBusca = p.usuarios.nome.toLowerCase().includes(busca.toLowerCase())
    const matchStatus =
      filtroStatus === "todos" ||
      (filtroStatus === "ativo" && p.is_ativo) ||
      (filtroStatus === "inativo" && !p.is_ativo)
    return matchBusca && matchStatus
  })

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h2 className="text-center mb-4" style={{ color: "#3EBAD2", fontWeight: "bold", letterSpacing: "2px" }}>
        PACIENTES
      </h2>

      <div className="d-flex justify-content-end mb-3">
        <button
          onClick={() => navigate("/patients/new")}
          style={{ backgroundColor: "#01577A", color: "white", border: "none", borderRadius: "8px", padding: "8px 20px", fontWeight: "500", cursor: "pointer" }}
        >
          Adicionar Paciente
        </button>
      </div>

      <div className="d-flex gap-3 mb-4 align-items-center">
        <input
          type="text"
          placeholder="Pesquisar"
          className="form-control"
          style={{ borderRadius: "8px", maxWidth: "400px" }}
          value={busca}
          onChange={e => setBusca(e.target.value)}
        />
        <select
          className="form-select"
          style={{ borderRadius: "8px", maxWidth: "160px" }}
          value={filtroStatus}
          onChange={e => setFiltroStatus(e.target.value as FiltroStatus)}
        >
          <option value="todos">Todos</option>
          <option value="ativo">Ativos</option>
          <option value="inativo">Inativos</option>
        </select>
      </div>

      {pacientesFiltrados.length === 0 && (
        <div className="text-center" style={{ color: "#777", marginTop: "32px" }}>
          Nenhum paciente encontrado.
        </div>
      )}

      <div className="d-flex flex-column gap-3">
        {pacientesFiltrados.map(paciente => (
          <div
            key={paciente.id_paciente}
            onClick={() => navigate(`/patients/${paciente.id_paciente}`)}
            style={{
              backgroundColor: "#EE715F",
              borderRadius: "12px",
              padding: "16px 24px",
              cursor: "pointer",
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: "18px", minWidth: "200px" }}>
              {paciente.usuarios.nome}
            </div>
            <div style={{ flex: 1, paddingLeft: "24px" }}>
              <div>
                Início do tratamento: {paciente.prontuarios[0] ? formatarData(paciente.prontuarios[0].data_inicio_tratamento) : "—"}
              </div>
              <div>Telefone: {paciente.usuarios.telefone}</div>
            </div>
            <div style={{ fontWeight: "bold" }}>
              Status: {paciente.is_ativo ? "Ativo" : "Inativo"}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Patients
