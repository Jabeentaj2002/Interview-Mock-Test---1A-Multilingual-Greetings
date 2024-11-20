import {Component} from 'react'

import TabItem from './TabItem'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeBtn: languageGreetingsList[0].id,
    activeImg: languageGreetingsList[0].imageUrl,
    activeAlt: languageGreetingsList[0].imageAltText,
  }

  languageSelected = (id, imageUrl, imageAltText) => {
    this.setState({activeBtn: id, activeImg: imageUrl, activeAlt: imageAltText})
  }

  render() {
    const {activeBtn, activeImg, activeAlt} = this.state
    return (
      <div className="multilingual-container">
        <h1 className="main-heading">Multilingual Greetings</h1>
        <ul className="buttons-container">
          {languageGreetingsList.map(eachGreeting => (
            <TabItem
              key={eachGreeting.id}
              buttonDetails={eachGreeting}
              languageSelected={this.languageSelected}
              active={eachGreeting.id === activeBtn}
            />
          ))}
        </ul>
        <img src={activeImg} className="active-img" alt={activeAlt} />
      </div>
    )
  }
}

export default App
