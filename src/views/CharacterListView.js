import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';
import { CharacterList } from "../components";
import { getChars } from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
  }

  render() {
    if (this.props.fetching) {
      <Loader type="Puff" color="#00BFFF" height="90" width="60" />
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.characters,
  error: state.error,
  fetching: state.fetching
});

export default connect(
  mapStateToProps,
    { getChars }
)(CharacterListView);
