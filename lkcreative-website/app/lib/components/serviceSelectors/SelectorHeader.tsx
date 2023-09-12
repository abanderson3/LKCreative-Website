import { FC } from "react"

interface SelectorHeaderProps {
  header: string
}

const SelectorHeader: FC<SelectorHeaderProps> = ({ header }) => {

  return (
    <div className="p-1 max-w-lg mx-auto">
      {header}
    </div>
  )
}

export default SelectorHeader