import React from "react";
import Draggable from "react-draggable";
import "./App.css";

export default class App extends React.Component {
  eventLogger = (e, data) => {
    console.log("Event: ", e);
    console.log("Data: ", data);
  };

  render() {
    return (
      <React.Fragment>
        {[0, 1, 2].map(value => (
          <Draggable
            key={value}
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            grid={[1, 1]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}
          >
            <div className="whole">
              <div className="handle">Drag from here</div>
              <div>This readme is really dragging on...</div>
            </div>
          </Draggable>
        ))}
      </React.Fragment>
    );
  }
}
