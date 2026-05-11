interface Props {
  tituloItem: string
  senha: string
  onChangeSenha: (val: string) => void
  erro: string
  loading: boolean
  onConfirmar: () => void
  onCancelar: () => void
}

function PasswordModal({ tituloItem, senha, onChangeSenha, erro, loading, onConfirmar, onCancelar }: Props) {
  return (
    <div style={{ position: "fixed", inset: 0, backgroundColor:"rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
      <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "32px", width: "100%", maxWidth: "400px", boxShadow: "0 8px 32px rgba(0,0,0,0.2)"}}>
        <h5 style={{ color: "#01577A", fontWeight: "bold", marginBottom: "8px" }}>Confirmar exclusão</h5>
        <p style={{ color: "#555", marginBottom: "20px" }}>
          Digite sua senha para excluir <strong>"{tituloItem}"</strong>. Esta ação não pode ser desfeita.
        </p>
        <input
          type="password"
          className="form-control"
          style={{ borderRadius: "8px", marginBottom: "12px" }}
          placeholder="Senha de administrador"
          value={senha}
          onChange={e => onChangeSenha(e.target.value)}
          onKeyDown={e => e.key === "Enter" && onConfirmar()}
          autoFocus
        />
        {erro && (
          <div style={{ color: "#EE715F", fontSize: "13px", marginBottom: "12px" }}>
            {erro}
          </div>
        )}
        <div className="d-flex gap-2">
          <button
            onClick={onConfirmar}
            disabled={loading || !senha}
            style={{ backgroundColor: "#EE715F", color: "white", border: "none", borderRadius: "8px", padding: "8px 24px", fontWeight: "500", cursor: loading || !senha ? "not-allowed" : "pointer", opacity: loading || !senha ? 0.7 : 1 }}
          >
            {loading ? "Excluindo..." : "Confirmar"}
          </button>
          <button
            onClick={onCancelar}
            disabled={loading}
            style={{ backgroundColor: "#ccc", color: "#333", border: "none", borderRadius: "8px", padding: "8px 24px", fontWeight: "500", cursor: "pointer" }}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

export default PasswordModal
