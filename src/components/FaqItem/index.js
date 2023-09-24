// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    isButtonClicked: false,
  }

  pulsMinusClick = () => {
    const {isButtonClicked} = this.state
    this.setState({isButtonClicked: !isButtonClicked})
  }

  render() {
    const {isButtonClicked} = this.state
    const {faqDetails} = this.props
    const {id, questionText, answerText} = faqDetails
    const imgUrls = isButtonClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const stateAlts = isButtonClicked ? 'minus' : 'plus'

    return (
      <li key={id} className="list-con">
        <div className="card-con">
          <h1 className="head1">{questionText}</h1>
          <button
            type="button"
            className="button"
            onClick={this.pulsMinusClick}
          >
            <img src={imgUrls} alt={stateAlts} className="image" />
          </button>
        </div>
        {isButtonClicked && <hr className="hr" />}
        {isButtonClicked && <p className="para1">{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
