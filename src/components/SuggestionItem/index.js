// Write your code here
const SuggestionItem = props => {
  const {suggestionDetails, selectSuggestion} = props
  const {id, suggestion} = suggestionDetails

  const onSelectSuggestion = () => {
    selectSuggestion(id)
  }

  return (
    <li>
      <h1>{suggestion}</h1>
      <button onClick={onSelectSuggestion} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
