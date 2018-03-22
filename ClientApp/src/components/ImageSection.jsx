import React, { Component } from "react";
import { Col, Row, Button, Image } from "react-bootstrap";
import cat from "../images/cat/cat.jpg";
import car from "../images/car/car.png"

class ImageSection extends Component {
  constructor(props) {
    super(props);
    this.state = { showImage: false };
  }
  handleShowImagesClick = () => {
    this.setState({ showImage: true });
  };
  handleHideImagesClick = () => {
    this.setState({ showImage: false });
  };
  render() {
    return (
      <div style={{marginTop:"20px"}}>
        <Row>
          <Col xs={4} xsOffset={2}>
            {this.state.showImage ? <Image src={cat} responsive /> : null}
          </Col>
          <Col xs={4}>
            {this.state.showImage ? <Image src={car} responsive /> : null}
          </Col>
        </Row>
        <Row>
          <Col xs={2} xsOffset={2}>
            {!this.state.showImage ? (
              <Button
                onClick={event => this.handleShowImagesClick()}
                bsStyle="primary"
              >
                Show Images
              </Button>
            ) : (
              <Button
                onClick={event => this.handleHideImagesClick()}
                bsStyle="danger"
              >
                Hide Images
              </Button>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default ImageSection;
