import { useNavigate, useParams } from "react-router-dom"
import CollapsibleSection from "../../components/CollapsibleSection"
import ItemCard from "../../components/ItemCard"

function formatarData(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { timeZone: "UTC" })
}

function Vazio({ mensagem }: { mensagem: string }) {
  return <div style={{ color: "#999", fontSize: "14px" }}>{mensagem}</div>
}

const mockPacientes = [
  {
    id_paciente: 1,
    is_ativo: true,
    nome: "Ana Paula Souza",
    email: "ana.souza@email.com",
    data_nascimento: "1990-03-15",
    telefone: "(11) 98765-4321",
    prontuario: [{
      id_prontuario: 1,
      data_inicio_tratamento: "2026-01-10",
      classificacao: "Moderado",
      id_paciente: 1,
      orientacoes: [
        { id_orientacao: 1, orientacao: "Realizar exercícios de alongamento cervical diariamente.", data_orientacao: "2026-01-10" }
      ],
      prontuarios_exercicios: [
        { exercicios: { id_exercicio: 1, titulo: "Alongamento Cervical", orientacoes: "Executar 3 séries de 30 segundos, 2x ao dia." } }
      ],
      prontuarios_avaliacoes: [
        { avaliacoes: { id_avaliacao: 1, avaliacao: "Paciente apresenta melhora postural de 30%.", data_avaliacao: "2026-02-01" } }
      ],
      prontuarios_sinais: [
        { sinais: { id_sinal: 1, sinal: "Dor cervical", escala: 7 } }
      ],
      prontuarios_queixas: [
        { queixas: { id_queixa: 1, queixa: "Dor no pescoço ao acordar", data_queixa: "2026-01-10" } }
      ]
    }]
  },
  {
    id_paciente: 2,
    is_ativo: false,
    nome: "Carlos Eduardo Lima",
    email: "carlos.lima@email.com",
    data_nascimento: "1985-07-22",
    telefone: "(11) 91234-5678",
    prontuario: [{
      id_prontuario: 2,
      data_inicio_tratamento: "2025-11-05",
      classificacao: "Leve",
      id_paciente: 2,
      orientacoes: [],
      prontuarios_exercicios: [
        { exercicios: { id_exercicio: 2, titulo: "Fortalecimento Lombar", orientacoes: "Executar 10 repetições, 3 séries." } }
      ],
      prontuarios_avaliacoes: [],
      prontuarios_sinais: [
        { sinais: { id_sinal: 2, sinal: "Lombalgia", escala: 4 } }
      ],
      prontuarios_queixas: [
        { queixas: { id_queixa: 2, queixa: "Dor lombar ao sentar por longos períodos", data_queixa: "2025-11-05" } }
      ]
    }]
  },
  {
    id_paciente: 3,
    is_ativo: true,
    nome: "Fernanda Oliveira",
    email: "fernanda.oliveira@email.com",
    data_nascimento: "1998-12-01",
    telefone: "(21) 99876-5432",
    prontuario: [{
      id_prontuario: 3,
      data_inicio_tratamento: "2026-02-20",
      classificacao: "Grave",
      id_paciente: 3,
      orientacoes: [
        { id_orientacao: 2, orientacao: "Evitar movimentos bruscos da coluna.", data_orientacao: "2026-02-20" },
        { id_orientacao: 3, orientacao: "Usar travesseiro ortopédico ao dormir.", data_orientacao: "2026-03-01" }
      ],
      prontuarios_exercicios: [
        { exercicios: { id_exercicio: 3, titulo: "Respiração Diafragmática", orientacoes: "Inspirar profundamente, expirar lentamente. 5 minutos." } }
      ],
      prontuarios_avaliacoes: [
        { avaliacoes: { id_avaliacao: 2, avaliacao: "Tensão muscular elevada na região torácica.", data_avaliacao: "2026-02-20" } }
      ],
      prontuarios_sinais: [
        { sinais: { id_sinal: 3, sinal: "Tensão torácica", escala: 8 } }
      ],
      prontuarios_queixas: [
        { queixas: { id_queixa: 3, queixa: "Dificuldade para respirar fundo", data_queixa: "2026-02-20" } }
      ]
    }]
  }
]

function PatientProfile() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const paciente = mockPacientes.find(p => p.id_paciente === Number(id)) ?? mockPacientes[0]
  const prontuario = paciente.prontuario[0]

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>

      <button
        onClick={() => navigate("/patients")}
        style={{ background: "none", border: "none", color: "#3EBAD2", fontWeight: "bold", fontSize: "16px", marginBottom: "16px", cursor: "pointer" }}
      >
        ← Voltar
      </button>

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
          Status: {paciente.is_ativo ? "Ativo" : "Inativo"}
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
