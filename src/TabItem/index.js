import {ButtonItem, Button} from './styledComponents'

const TabItem = props => {
  const {buttonDetails, languageSelected, active} = props
  const {buttonText, id, imageUrl, imageAltText} = buttonDetails

  const onButtonClicked = () => {
    languageSelected(id, imageUrl, imageAltText)
  }

  return (
    <>
      <ButtonItem>
        <Button onClick={onButtonClicked} active={active}>
          {buttonText}
        </Button>
      </ButtonItem>
    </>
  )
}

export default TabItem
