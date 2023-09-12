import { FC } from "react"

interface SelectorHeaderProps {
  header: string
}

const SelectorHeader: FC<SelectorHeaderProps> = ({ header }) => {

  return (
    <div className="mb-3 border border-black rounded-lg p-1 max-w-lg mx-auto">
      {header}
    </div>
  )
}

export default SelectorHeader