import {Component} from 'react'
import {BackgroundImage} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItems'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeValue: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
  }

  updateValue = value => {
    this.setState({activeValue: value})
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  onClickButton = () => {
    const {activeValue, color1, color2} = this.state
    this.setState({activeValue: activeValue, color1: color1, color2: color2})
  }

  render() {
    const {activeValue, color1, color2} = this.state

    return (
      <BackgroundImage direction={activeValue} color1={color1} color2={color2}>
        <h1>Generate a CSS Color Gradient</h1>
        <p>Choose direction</p>
        <ul>
          {gradientDirectionsList.map(item => (
            <GradientDirectionItem
              activeValue={activeValue}
              updateValue={this.updateValue}
              itemData={item}
              key={item.directionId}
            />
          ))}
        </ul>
        <p>Pick the Colours</p>
        <label htmlFor="in1">{color1}</label>
        <input
          id="in1"
          type="color"
          value={color1}
          onChange={this.onChangeColor1}
        />
        <label htmlFor="in2">{color2}</label>
        <input
          id="in2"
          type="color"
          value={color2}
          onChange={this.onChangeColor2}
        />
        <button type="button" onClick={this.onClickButton}>
          Generate
        </button>
      </BackgroundImage>
    )
  }
}

export default GradientGenerator
