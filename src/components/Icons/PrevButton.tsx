import { ReactComponent as PreviousButtonIcon } from '@/assets/icons/previous-button-icon.svg'
import { CustomArrowProps } from 'react-slick'

const PrevButton = ({ onClick }: CustomArrowProps) => (
  <PreviousButtonIcon
    className="inline-block h-6 w-6 shrink-0 cursor-pointer shadow-md"
    onClick={onClick}
  />
)

export default PrevButton
