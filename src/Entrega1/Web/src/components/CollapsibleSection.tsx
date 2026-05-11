import { useState } from "react"
import type { ReactNode } from "react"

interface Props {
  titulo: string
  children: ReactNode
  gap?: "gap-2" | "gap-3"
}

function CollapsibleSection({ titulo, children, gap = "gap-2"}: Props) {
  const [aberta, setAberta] = useState(false)

  return (
    <div>
      <div
        onClick={() => setAberta(prev => !prev)}
        style={{ color: "#3EBAD2", fontWeight: "bold", fontSize: "20px", cursor: "pointer" }}
      >
        {titulo} {aberta ? "▲" : "▼"}
      </div>
      {aberta && (
        <div className={`mt-2 d-flex flex-column ${gap}`}>
          {children}
        </div>
      )}
    </div>
  )
}

export default CollapsibleSection
