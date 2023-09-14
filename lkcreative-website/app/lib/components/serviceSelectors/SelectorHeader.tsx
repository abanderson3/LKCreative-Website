import { FC } from "react"

interface SelectorHeaderProps {
  header: string
}

const SelectorHeader: FC<SelectorHeaderProps> = ({ header }) => {

  return (
    <div className="m-1 max-w-lg mx-auto w-11/12 py-1">
      {header}
    </div>
  )
}

export default SelectorHeader