import { ReactComponent as NextButtonIcon } from '@/assets/icons/next-button-icon.svg'
import { CustomArrowProps } from 'react-slick'

const NextButton = ({ onClick }: CustomArrowProps) => (
  <NextButtonIcon
    className="inline-block h-6 w-6 shrink-0 cursor-pointer shadow-md"
    onClick={onClick}
  />
)

export default NextButton
