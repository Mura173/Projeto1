import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscarPaciente, adicionarOrientacao, adicionarQueixa, adicionarSinal, adicionarAvaliacao, prescreverExercicio } from "../../services/pacientes"
import { listarExercicios } from "../../services/exercicios"
import type { PacienteCompleto, ExercicioItem } from "../../types"
import CollapsibleSection from "../../components/CollapsibleSection"
import ItemCard from "../../components/ItemCard"

function formatarData(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { timeZone: "UTC" })
}

function Vazio({ mensagem }: { mensagem: string }) {
  return <div style={{ color: "#999", fontSize: "14px" }}>{mensagem}</div>
}

const BTN_SALVAR = { backgroundColor: "#01577A", color: "white", border: "none", borderRadius: "8px", padding: "6px 16px", fontWeight: "500", fontSize: "14px" } as const
const BTN_CANCELAR = { backgroundColor: "#ccc", color: "#333", border: "none", borderRadius: "8px", padding: "6px 16px", fontWeight: "500", cursor: "pointer", fontSize: "14px" } as const

function PatientProfile() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [paciente, setPaciente] = useState<PacienteCompleto | null>(null)
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState("")

  const [mostrarFormOrientacao, setMostrarFormOrientacao] = useState(false)
  const [novaOrientacao, setNovaOrientacao] = useState("")
  const [salvandoOrientacao, setSalvandoOrientacao] = useState(false)
  const [erroOrientacao, setErroOrientacao] = useState("")

  const [mostrarFormQueixa, setMostrarFormQueixa] = useState(false)
  const [novaQueixa, setNovaQueixa] = useState("")
  const [salvandoQueixa, setSalvandoQueixa] = useState(false)
  const [erroQueixa, setErroQueixa] = useState("")

  const [mostrarFormSinal, setMostrarFormSinal] = useState(false)
  const [novoSinal, setNovoSinal] = useState("")
  const [novaEscala, setNovaEscala] = useState(5)
  const [salvandoSinal, setSalvandoSinal] = useState(false)
  const [erroSinal, setErroSinal] = useState("")

  const [mostrarFormAvaliacao, setMostrarFormAvaliacao] = useState(false)
  const [novaAvaliacao, setNovaAvaliacao] = useState("")
  const [salvandoAvaliacao, setSalvandoAvaliacao] = useState(false)
  const [erroAvaliacao, setErroAvaliacao] = useState("")

  const [exerciciosDisponiveis, setExerciciosDisponiveis] = useState<ExercicioItem[]>([])
  const [exercicioSelecionado, setExercicioSelecionado] = useState("")
  const [prescrevendo, setPrescrevendo] = useState(false)
  const [erroPrescricao, setErroPrescricao] = useState("")

  useEffect(() => {
    if (!id) return
    buscarPaciente(Number(id))
      .then(setPaciente)
      .catch(() => setErro("Erro ao carregar perfil do paciente."))
      .finally(() => setLoading(false))
  }, [id])

  useEffect(() => {
    listarExercicios().then(setExerciciosDisponiveis).catch(() => {})
  }, [])

  const recarregar = async () => {
    const atualizado = await buscarPaciente(Number(id))
    setPaciente(atualizado)
  }

  const handlePrescrever = async () => {
    if (!paciente || !exercicioSelecionado) return
    setPrescrevendo(true)
    setErroPrescricao("")
    try {
      await prescreverExercicio(paciente.id_paciente, Number(exercicioSelecionado))
      await recarregar()
      setExercicioSelecionado("")
    } catch {
      setErroPrescricao("Erro ao prescrever exercício.")
    } finally {
      setPrescrevendo(false)
    }
  }

  const salvarOrientacao = async () => {
    if (!paciente || !novaOrientacao.trim()) return
    setSalvandoOrientacao(true)
    setErroOrientacao("")
    try {
      await adicionarOrientacao(paciente.id_paciente, novaOrientacao.trim())
      await recarregar()
      setNovaOrientacao("")
      setMostrarFormOrientacao(false)
    } catch {
      setErroOrientacao("Erro ao salvar orientação.")
    } finally {
      setSalvandoOrientacao(false)
    }
  }

  const salvarQueixa = async () => {
    if (!paciente || !novaQueixa.trim()) return
    setSalvandoQueixa(true)
    setErroQueixa("")
    try {
      await adicionarQueixa(paciente.id_paciente, novaQueixa.trim())
      await recarregar()
      setNovaQueixa("")
      setMostrarFormQueixa(false)
    } catch {
      setErroQueixa("Erro ao salvar queixa.")
    } finally {
      setSalvandoQueixa(false)
    }
  }

  const salvarSinal = async () => {
    if (!paciente || !novoSinal.trim()) return
    setSalvandoSinal(true)
    setErroSinal("")
    try {
      await adicionarSinal(paciente.id_paciente, novoSinal.trim(), novaEscala)
      await recarregar()
      setNovoSinal("")
      setNovaEscala(5)
      setMostrarFormSinal(false)
    } catch {
      setErroSinal("Erro ao salvar sinal.")
    } finally {
      setSalvandoSinal(false)
    }
  }

  const salvarAvaliacao = async () => {
    if (!paciente || !novaAvaliacao.trim()) return
    setSalvandoAvaliacao(true)
    setErroAvaliacao("")
    try {
      await adicionarAvaliacao(paciente.id_paciente, novaAvaliacao.trim())
      await recarregar()
      setNovaAvaliacao("")
      setMostrarFormAvaliacao(false)
    } catch {
      setErroAvaliacao("Erro ao salvar avaliação.")
    } finally {
      setSalvandoAvaliacao(false)
    }
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
        <div style={{ flex: 1 }}>
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
        <div style={{ fontWeight: "bold", fontSize: "16px", alignSelf: "flex-start" }}>
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
                {erroOrientacao && <div style={{ color: "#EE715F", fontSize: "13px", marginBottom: "8px" }}>{erroOrientacao}</div>}
                <div className="d-flex gap-2">
                  <button onClick={salvarOrientacao} disabled={salvandoOrientacao || !novaOrientacao.trim()} style={{ ...BTN_SALVAR, cursor: salvandoOrientacao || !novaOrientacao.trim() ? "not-allowed" : "pointer", opacity: salvandoOrientacao || !novaOrientacao.trim() ? 0.7 : 1 }}>
                    {salvandoOrientacao ? "Salvando..." : "Salvar"}
                  </button>
                  <button onClick={() => { setMostrarFormOrientacao(false); setNovaOrientacao(""); setErroOrientacao("") }} disabled={salvandoOrientacao} style={BTN_CANCELAR}>Cancelar</button>
                </div>
              </div>
            ) : (
              <button onClick={() => setMostrarFormOrientacao(true)} style={{ ...BTN_SALVAR, cursor: "pointer", alignSelf: "flex-start" }}>
                + Nova Orientação
              </button>
            )}
          </CollapsibleSection>

          <CollapsibleSection titulo="Exercícios Prescritos">
            {prontuario.prontuarios_exercicios.length === 0
              ? <Vazio mensagem="Nenhum exercício prescrito." />
              : prontuario.prontuarios_exercicios.map(prescricao => (
                <ItemCard key={prescricao.exercicios.id_exercicio}>
                  <div style={{ fontWeight: "bold", color: "#01577A" }}>{prescricao.exercicios.titulo}</div>
                  <div style={{ fontSize: "14px", color: "#555", marginTop: "4px" }}>{prescricao.exercicios.orientacoes}</div>
                </ItemCard>
              ))
            }

            {(() => {
              const jaPrescritos = new Set(prontuario.prontuarios_exercicios.map(p => p.exercicios.id_exercicio))
              const disponiveis = exerciciosDisponiveis.filter(e => !jaPrescritos.has(e.id_exercicio))
              if (disponiveis.length === 0) return null
              return (
                <div>
                  <div className="d-flex gap-2 align-items-center mt-1">
                    <select
                      className="form-select"
                      value={exercicioSelecionado}
                      onChange={e => setExercicioSelecionado(e.target.value)}
                      style={{ borderRadius: "8px" }}
                    >
                      <option value="">Selecionar exercício...</option>
                      {disponiveis.map(e => (
                        <option key={e.id_exercicio} value={e.id_exercicio}>{e.titulo}</option>
                      ))}
                    </select>
                    <button
                      onClick={handlePrescrever}
                      disabled={!exercicioSelecionado || prescrevendo}
                      style={{ ...BTN_SALVAR, cursor: !exercicioSelecionado || prescrevendo ? "not-allowed" : "pointer", opacity: !exercicioSelecionado || prescrevendo ? 0.7 : 1, whiteSpace: "nowrap" }}
                    >
                      {prescrevendo ? "Prescrevendo..." : "Prescrever"}
                    </button>
                  </div>
                  {erroPrescricao && <div style={{ color: "#EE715F", fontSize: "13px", marginTop: "6px" }}>{erroPrescricao}</div>}
                </div>
              )
            })()}
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
              {mostrarFormQueixa ? (
                <div style={{ backgroundColor: "white", borderRadius: "8px", padding: "12px 16px", border: "1px solid #3EBAD2", marginTop: "8px" }}>
                  <textarea
                    className="form-control"
                    placeholder="Queixa"
                    rows={2}
                    value={novaQueixa}
                    onChange={e => setNovaQueixa(e.target.value)}
                    style={{ borderRadius: "8px", marginBottom: "8px", resize: "vertical" }}
                  />
                  {erroQueixa && <div style={{ color: "#EE715F", fontSize: "13px", marginBottom: "8px" }}>{erroQueixa}</div>}
                  <div className="d-flex gap-2">
                    <button onClick={salvarQueixa} disabled={salvandoQueixa || !novaQueixa.trim()} style={{ ...BTN_SALVAR, cursor: salvandoQueixa || !novaQueixa.trim() ? "not-allowed" : "pointer", opacity: salvandoQueixa || !novaQueixa.trim() ? 0.7 : 1 }}>
                      {salvandoQueixa ? "Salvando..." : "Salvar"}
                    </button>
                    <button onClick={() => { setMostrarFormQueixa(false); setNovaQueixa(""); setErroQueixa("") }} disabled={salvandoQueixa} style={BTN_CANCELAR}>Cancelar</button>
                  </div>
                </div>
              ) : (
                <button onClick={() => setMostrarFormQueixa(true)} style={{ ...BTN_SALVAR, cursor: "pointer", marginTop: "8px" }}>
                  + Nova Queixa
                </button>
              )}
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
              {mostrarFormSinal ? (
                <div style={{ backgroundColor: "white", borderRadius: "8px", padding: "12px 16px", border: "1px solid #3EBAD2", marginTop: "8px" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Sinal clínico"
                    value={novoSinal}
                    onChange={e => setNovoSinal(e.target.value)}
                    style={{ borderRadius: "8px", marginBottom: "8px" }}
                  />
                  <div style={{ marginBottom: "8px" }}>
                    <label style={{ fontSize: "14px", color: "#555", display: "block", marginBottom: "4px" }}>
                      Escala de dor: {novaEscala}/10
                    </label>
                    <input
                      type="range"
                      min={1}
                      max={10}
                      value={novaEscala}
                      onChange={e => setNovaEscala(Number(e.target.value))}
                      style={{ width: "100%" }}
                    />
                  </div>
                  {erroSinal && <div style={{ color: "#EE715F", fontSize: "13px", marginBottom: "8px" }}>{erroSinal}</div>}
                  <div className="d-flex gap-2">
                    <button onClick={salvarSinal} disabled={salvandoSinal || !novoSinal.trim()} style={{ ...BTN_SALVAR, cursor: salvandoSinal || !novoSinal.trim() ? "not-allowed" : "pointer", opacity: salvandoSinal || !novoSinal.trim() ? 0.7 : 1 }}>
                      {salvandoSinal ? "Salvando..." : "Salvar"}
                    </button>
                    <button onClick={() => { setMostrarFormSinal(false); setNovoSinal(""); setNovaEscala(5); setErroSinal("") }} disabled={salvandoSinal} style={BTN_CANCELAR}>Cancelar</button>
                  </div>
                </div>
              ) : (
                <button onClick={() => setMostrarFormSinal(true)} style={{ ...BTN_SALVAR, cursor: "pointer", marginTop: "8px" }}>
                  + Novo Sinal
                </button>
              )}
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
              {mostrarFormAvaliacao ? (
                <div style={{ backgroundColor: "white", borderRadius: "8px", padding: "12px 16px", border: "1px solid #3EBAD2", marginTop: "8px" }}>
                  <textarea
                    className="form-control"
                    placeholder="Avaliação"
                    rows={3}
                    value={novaAvaliacao}
                    onChange={e => setNovaAvaliacao(e.target.value)}
                    style={{ borderRadius: "8px", marginBottom: "8px", resize: "vertical" }}
                  />
                  {erroAvaliacao && <div style={{ color: "#EE715F", fontSize: "13px", marginBottom: "8px" }}>{erroAvaliacao}</div>}
                  <div className="d-flex gap-2">
                    <button onClick={salvarAvaliacao} disabled={salvandoAvaliacao || !novaAvaliacao.trim()} style={{ ...BTN_SALVAR, cursor: salvandoAvaliacao || !novaAvaliacao.trim() ? "not-allowed" : "pointer", opacity: salvandoAvaliacao || !novaAvaliacao.trim() ? 0.7 : 1 }}>
                      {salvandoAvaliacao ? "Salvando..." : "Salvar"}
                    </button>
                    <button onClick={() => { setMostrarFormAvaliacao(false); setNovaAvaliacao(""); setErroAvaliacao("") }} disabled={salvandoAvaliacao} style={BTN_CANCELAR}>Cancelar</button>
                  </div>
                </div>
              ) : (
                <button onClick={() => setMostrarFormAvaliacao(true)} style={{ ...BTN_SALVAR, cursor: "pointer", marginTop: "8px" }}>
                  + Nova Avaliação
                </button>
              )}
            </div>

          </CollapsibleSection>

        </div>
      )}

    </div>
  )
}

export default PatientProfile
