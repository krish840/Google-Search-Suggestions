// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem/index'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class GoogleSuggestions extends Component {
  state = {searchInput: '', SuggestionsDetailsList: suggestionsList}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  selectSuggestion = id => {
    const {SuggestionsDetailsList} = this.state

    const filteredSuggestions = SuggestionsDetailsList.filter(
      each => each.id !== id,
    )
    this.setState({SuggestionsDetailsList: filteredSuggestions})
  }

  render() {
    const {searchInput, SuggestionsDetailsList} = this.state
    const searchResults = SuggestionsDetailsList.filter(each =>
      each.name.includes(searchInput),
    )
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
            alt="search icon"
          />
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
        </div>
        <ul>
          {searchResults.map(each => (
            <SuggestionItem
              suggestionDetails={each}
              key={each.id}
              selectSuggestion={this.SuggestionItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default GoogleSuggestions
