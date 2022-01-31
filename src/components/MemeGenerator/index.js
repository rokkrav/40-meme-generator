import {Component} from 'react'

import {
  MainContainer,
  MemeGeneratorContainer,
  FormContainer,
  Heading,
  MemeContainer,
  GreetText,
  LabelText,
  InputBox,
  FontSizeDropDown,
  DropDownOption,
  GenerateBtn,
  FormAndMemeContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    activeImgUrl: '',
    activeTopText: '',
    activeBottomText: '',
    activeFontSize: '',
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {imgUrl, topText, bottomText, fontSize} = this.state
    this.setState({
      activeImgUrl: imgUrl,
      activeTopText: topText,
      activeBottomText: bottomText,
      activeFontSize: fontSize,
    })
  }

  onChangeUrl = event => {
    this.setState({imgUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFont = event => {
    this.setState({fontSize: event.target.value})
  }

  renderMemeGeneratorForm = () => {
    const {imgUrl, topText, bottomText, fontSize} = this.state
    return (
      <FormContainer onSubmit={this.onSubmitForm}>
        <LabelText htmlFor="imgUrl">Image URL</LabelText>
        <InputBox
          type="text"
          value={imgUrl}
          id="imgUrl"
          onChange={this.onChangeUrl}
          placeholder="Enter the Image URL"
        />

        <LabelText htmlFor="topText">Top Text</LabelText>
        <InputBox
          type="text"
          value={topText}
          id="topText"
          onChange={this.onChangeTopText}
          placeholder="Enter the Top Text"
        />

        <LabelText htmlFor="bottomText">Bottom Text</LabelText>
        <InputBox
          type="text"
          value={bottomText}
          id="bottomText"
          onChange={this.onChangeBottomText}
          placeholder="Enter the Bottom Text"
        />

        <LabelText htmlFor="fontDropDown">Font Size</LabelText>
        <FontSizeDropDown
          id="fontDropDown"
          value={fontSize}
          onChange={this.onChangeFont}
        >
          {fontSizesOptionsList.map(eachOption => (
            <DropDownOption
              key={eachOption.optionId}
              value={eachOption.optionId}
            >
              {eachOption.displayText}
            </DropDownOption>
          ))}
        </FontSizeDropDown>
        <GenerateBtn type="submit">Generate</GenerateBtn>
      </FormContainer>
    )
  }

  renderMeme = () => {
    const {
      activeImgUrl,
      activeTopText,
      activeBottomText,
      activeFontSize,
    } = this.state
    return (
      <MemeContainer data-testid="meme" imgUrl={activeImgUrl}>
        <GreetText activeFontSize={activeFontSize}>{activeTopText}</GreetText>
        <GreetText activeFontSize={activeFontSize}>
          {activeBottomText}
        </GreetText>
      </MemeContainer>
    )
  }

  render() {
    return (
      <MainContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeContainer>
            {this.renderMeme()}
            {this.renderMemeGeneratorForm()}
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
