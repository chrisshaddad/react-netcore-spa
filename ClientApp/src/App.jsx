import React, { Component } from "react";
import { Col, Grid, Row, Button } from "react-bootstrap";
import ChannelsTable from "./components/ChannelsTable";
import ImageSection from "./components/ImageSection";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfChannels: []
    };
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  fetchListOfChannels = () => {
    fetch("api/Channels/GetAllChannels")
      .then(res => res.json())
      .then(data => this.setState({ listOfChannels: data }));
  };

  handleGetChannelsClick = () => {
    this.fetchListOfChannels();
  };

  handleClearChannelsClick = () => {
    this.setState({
      listOfChannels: []
    });
  };

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={8} xsOffset={2}>
            <ChannelsTable channels={this.state.listOfChannels} />
          </Col>
        </Row>

        <Row>
          <Col xs={2} xsOffset={2}>
            {!this.state.listOfChannels.length > 0 ? (
              <Button
                bsStyle="primary"
                onClick={event => this.handleGetChannelsClick()}
              >
                Get Channels
              </Button>
            ) : (
              <Button
                bsStyle="danger"
                onClick={event => this.handleClearChannelsClick()}
              >
                Clear Channels
              </Button>
            )}
          </Col>
        </Row>

        <ImageSection />
      </Grid>
    );
  }
}
