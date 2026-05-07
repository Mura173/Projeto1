import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscarPaciente, adicionarOrientacao } from "../../services/pacientes"
import type { PacienteCompleto } from "../../types"
import CollapsibleSection from "../../components/CollapsibleSection"
import ItemCard from "../../components/ItemCard"

function formatarData(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { timeZone: "UTC"})
}

function Vazio({ mensagem }: { mensagem: string }) {
  return <div style={{color: "#999", fontSize: "14px" }}>{mensagem}</div>
}

function PatientProfile() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [paciente, setPaciente] = useState<PacienteCompleto | null>(null)
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState("")

  const [mostrarFormOrientacao, setMostrarFormOrientacao] = useState(false)
  const [novaOrientacao, setNovaOrientacao] = useState("")
  const [dataOrientacao, setDataOrientacao] = useState(() => new Date().toISOString().split("T")[0])
  const [salvandoOrientacao, setSalvandoOrientacao] = useState(false)
  const [erroOrientacao, setErroOrientacao] = useState("")

  useEffect(() => {
    if (!id) return
    buscarPaciente(Number(id))
      .then(setPaciente)
      .catch(() => setErro("Erro ao carregar perfil do paciente."))
      .finally(() => setLoading(false))
  }, [id])

  const salvarOrientacao = async () => {
    if (!prontuario || !novaOrientacao.trim()) return
    setSalvandoOrientacao(true)
    setErroOrientacao("")
    try {
      await adicionarOrientacao(prontuario.id_prontuario, novaOrientacao.trim(), dataOrientacao)
      const atualizado = await buscarPaciente(Number(id))
      setPaciente(atualizado)
      setNovaOrientacao("")
      setMostrarFormOrientacao(false)
    } catch {
      setErroOrientacao("Erro ao salvar orientação.")
    } finally {
      setSalvandoOrientacao(false)
    }
  }

  const fecharFormOrientacao = () => {
    setMostrarFormOrientacao(false)
    setNovaOrientacao("")
    setErroOrientacao("")
  }

  const voltar = (
    <button
      onClick={() => navigate("/patients")}
      style={{ background: "none", border: "none", color: "#3EBAD2", fontWeight: "bold", fontSize: "16px", marginBottom: "16px", cursor: "pointer" }}
    >
      ← Voltar
    </button>
  )

  if (loading) {
    return (
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {voltar}
        <div className="text-center" style={{ color: "#777", marginTop: "48px" }}>Carregando...</div>
      </div>
    )
  }

  if (erro || !paciente) {
    return (
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {voltar}
        <div style={{ backgroundColor: "#fdecea", border: "1px solid #EE715F", borderRadius: "8px", padding: "10px 14px", color: "#EE715F" }}>
          {erro || "Paciente não encontrado."}
        </div>
      </div>
    )
  }

  const prontuario = paciente.prontuario[0]

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>

      {voltar}

      <div style={{ backgroundColor: "#EE715F", borderRadius: "12px", padding: "24px", color: "white", display: "flex", gap: "24px", alignItems: "center", marginBottom: "32px" }}>
        <div style={{ width: "80px", height: "80px", borderRadius: "50%", backgroundColor: "#f0c080", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px", flexShrink: 0 }}>
          👤
        </div>
        <div style={{ flex: 1}}>
          <div style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "8px" }}>{paciente.nome}</div>
          {prontuario && (
            <>
              <div>Classificação: {prontuario.classificacao}</div>
              <div>Início do tratamento: {formatarData(prontuario.data_inicio_tratamento)}</div>
            </>
          )}
          <div>Telefone: {paciente.telefone}</div>
          <div>Data de nascimento: {formatarData(paciente.data_nascimento)}</div>
        </div>
        <div style={{ fontWeight: "bold", fontSize: "16px", alignSelf: "flex-start"}}>
          Status: {prontuario ? prontuario.classificacao : "—"}
        </div>
      </div>

      {!prontuario ? (
        <div style={{ color: "#777", textAlign: "center" }}>Nenhum prontuário encontrado para este paciente.</div>
      ) : (
        <div className="d-flex flex-column gap-3">

          <CollapsibleSection titulo="Orientações">
            {prontuario.orientacoes.length === 0
              ? <Vazio mensagem="Nenhuma orientação registrada." />
              : prontuario.orientacoes.map(orientacao => (
                <ItemCard key={orientacao.id_orientacao}>
                  <div>{orientacao.orientacao}</div>
                  <div style={{ fontSize: "12px", color: "#888" }}>{formatarData(orientacao.data_orientacao)}</div>
                </ItemCard>
              ))
            }

            {mostrarFormOrientacao ? (
              <div style={{ backgroundColor: "white", borderRadius: "8px", padding: "12px 16px", border: "1px solid #3EBAD2" }}>
                <textarea
                  className="form-control"
                  placeholder="Orientação"
                  rows={3}
                  value={novaOrientacao}
                  onChange={e => setNovaOrientacao(e.target.value)}
                  style={{ borderRadius: "8px", marginBottom: "8px", resize: "vertical" }}
                />
                <input
                  type="date"
                  className="form-control"
                  value={dataOrientacao}
                  onChange={e => setDataOrientacao(e.target.value)}
                  style={{ borderRadius: "8px", marginBottom: "8px" }}
                />
                {erroOrientacao && (
                  <div style={{ color: "#EE715F", fontSize: "13px", marginBottom: "8px" }}>{erroOrientacao}</div>
                )}
                <div className="d-flex gap-2">
                  <button
                    onClick={salvarOrientacao}
                    disabled={salvandoOrientacao || !novaOrientacao.trim()}
                    style={{ backgroundColor: "#01577A", color: "white", border: "none", borderRadius: "8px", padding: "6px 16px", fontWeight: "500", cursor: salvandoOrientacao || !novaOrientacao.trim() ? "not-allowed" : "pointer", opacity: salvandoOrientacao || !novaOrientacao.trim() ? 0.7 : 1, fontSize: "14px" }}
                  >
                    {salvandoOrientacao ? "Salvando..." : "Salvar"}
                  </button>
                  <button
                    onClick={fecharFormOrientacao}
                    disabled={salvandoOrientacao}
                    style={{ backgroundColor: "#ccc", color: "#333", border: "none", borderRadius: "8px", padding: "6px 16px", fontWeight: "500", cursor: "pointer", fontSize: "14px" }}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setMostrarFormOrientacao(true)}
                style={{ backgroundColor: "#01577A", color: "white", border: "none", borderRadius: "8px", padding: "6px 16px", fontWeight: "500", cursor: "pointer", fontSize: "14px", alignSelf: "flex-start" }}
              >
                + Nova Orientação
              </button>
            )}
          </CollapsibleSection>

          <CollapsibleSection titulo="Exercícios Prescritos">
            {prontuario.prontuarios_exercicios.length === 0
              ? <Vazio mensagem="Nenhum exerício prescrito." />
              : prontuario.prontuarios_exercicios.map(prescricao => (
                <ItemCard key={prescricao.exercicios.id_exercicio}>
                  <div style={{ fontWeight: "bold", color: "#01577A" }}>{prescricao.exercicios.titulo}</div>
                  <div style={{ fontSize: "14px", color: "#555", marginTop: "4px" }}>{prescricao.exercicios.orientacoes}</div>
                </ItemCard>
              ))
            }
          </CollapsibleSection>

          <CollapsibleSection titulo="Prontuário Completo" gap="gap-3">

            <div>
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>Queixas</div>
              {prontuario.prontuarios_queixas.length === 0
                ? <Vazio mensagem="Nenhuma queixa registrada." />
                : prontuario.prontuarios_queixas.map(item => (
                  <ItemCard key={item.queixas.id_queixa}>
                    <div>{item.queixas.queixa}</div>
                    <div style={{ fontSize: "12px", color: "#888" }}>{formatarData(item.queixas.data_queixa)}</div>
                  </ItemCard>
                ))
              }
            </div>

            <div>
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>Sinais</div>
              {prontuario.prontuarios_sinais.length === 0
                ? <Vazio mensagem="Nenhum sinal registrado." />
                : prontuario.prontuarios_sinais.map(item => (
                  <ItemCard key={item.sinais.id_sinal}>
                    <div>{item.sinais.sinal} — Escala: {item.sinais.escala}/10</div>
                  </ItemCard>
                ))
              }
            </div>

            <div>
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>Avaliações</div>
              {prontuario.prontuarios_avaliacoes.length === 0
                ? <Vazio mensagem="Nenhuma avaliação registrada." />
                : prontuario.prontuarios_avaliacoes.map(item => (
                  <ItemCard key={item.avaliacoes.id_avaliacao}>
                    <div>{item.avaliacoes.avaliacao}</div>
                    <div style={{ fontSize: "12px", color: "#888" }}>{formatarData(item.avaliacoes.data_avaliacao)}</div>
                  </ItemCard>
                ))
              }
          </div>

          </CollapsibleSection>

        </div>
      )}

    </div>
  )
}

export default PatientProfile
