import type { ReactNode } from "react"

function ItemCard({ children }: { children: ReactNode }) {
  return (
    <div style={{ backgroundColor: "#f5f5f5" , borderRadius: "8px", padding: "12px 16px" }}>
      {children}
    </div>
  )
}

export default ItemCard
