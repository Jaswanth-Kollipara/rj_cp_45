import {ButtonElement} from './styledComponents'

const GradientDirectionItem = props => {
  const {itemData, activeValue, updateValue} = props
  const {value, displayText} = itemData
  const isValue = value === activeValue

  const onClickValue = () => {
    updateValue(value)
  }

  return (
    <li onClick={onClickValue}>
      <ButtonElement select={isValue}>{displayText}</ButtonElement>
    </li>
  )
}

export default GradientDirectionItem
