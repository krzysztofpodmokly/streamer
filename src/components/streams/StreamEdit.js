import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../store/actions';

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    return this.props.stream ? <div>StreamEdit</div> : <div>Loading</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // stream: state.streams[ownProps.match.params.id],
    stream: Object.values(state.streams).find(
      stream => stream.id.toString() === ownProps.match.params.id
    )
  };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamEdit);
