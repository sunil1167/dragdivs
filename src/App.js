import React, { useEffect } from "react";
import Draggable from "react-draggable";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function App() {
  const [line1, setLine1] = React.useState(null);
  const [line2, setLine2] = React.useState(null);
  const classes = useStyles();

  useEffect(() => {
    let line1 = new window.LeaderLine(
      document.getElementById("start1"),
      document.getElementById("end1"),
      { dash: { animation: true } },
      { endLabel: "This is additional label" }
    );

    let line2 = new window.LeaderLine(
      document.getElementById("end1"),
      document.getElementById("start2"),
      { dash: { animation: true } }
    );
    setLine1(line1);
    setLine2(line2);
  }, []);

  const handleDrag = () => {
    line1.position();
    line2.position();
  };
  // render() {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: "flex-start"
        }}
      >
        <Draggable
          axis="y"
          handle=".handle"
          onDrag={handleDrag}
          position={null}
          grid={[1, 1]}
          scale={1}
          cancel=".cancel"
        >
          <div
            id="start1"
            className="handle"
            style={{
              padding: "10px",
              marginRight: "10%",
              border: "1px solid black",
              width: "20%"
            }}
          >
            <div className="drag">Drag</div>
            <img
              className="cancel"
              alt="noimaege"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUwS5kiGjGAZXb5rCAU-lGjENoimE4yGyydJVeLGzPcAHYw6wc"
              width="100%"
            />
          </div>
        </Draggable>

        <Draggable
          axis="y"
          handle=".handle"
          onDrag={handleDrag}
          position={null}
          grid={[1, 1]}
          scale={1}
          cancel=".cancel"
        >
          <div
            id="end1"
            className="handle"
            style={{
              padding: "10px",
              marginRight: "10%",
              marginTop: "10%",
              border: "1px solid black",
              width: "20%"
            }}
          >
            <div className="drag">Drag</div>
            <img
              className="cancel"
              alt="noimaege"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnMT-wYf5OSPa0uDVSOrzrhArk59s_gchMnJoME9bpz9h9vKl9"
              width="100%"
            />
          </div>
        </Draggable>
        <Draggable
          axis="y"
          handle=".handle"
          onDrag={handleDrag}
          position={null}
          grid={[1, 1]}
          scale={1}
          cancel=".cancel"
        >
          <div
            id="start2"
            className="handle"
            style={{
              padding: "10px",
              marginRight: "50px",
              border: "1px solid black",
              width: "20%"
            }}
          >
            <div className="drag">Drag</div>
            <img
              className="cancel"
              alt="noimaege"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUwS5kiGjGAZXb5rCAU-lGjENoimE4yGyydJVeLGzPcAHYw6wc"
              width="100%"
            />
          </div>
        </Draggable>
      </div>

      {/* </div> */}

      {/* <div id="start">
        start posit <br /> fggfg fgfg ion
      </div>
      <br />
      <div id="end">end position</div> */}
      {/* {[0, 1, 2].map(value => (
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
        ))} */}
      {/* <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {[0].map(value => (
              <Grid id="start" key={value} item>
                <Paper className={classes.paper}>kjkjdf</Paper>
              </Grid>
            ))}
            {[0].map(value => (
              <Grid id="end" key={value} item>
                <Paper className={classes.paper}>kjkjdf</Paper>
              </Grid>
            ))}
          </Grid>
        </Grid> */}
      {/* <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container>
              <Grid item>
                <FormLabel>spacing</FormLabel>
                <RadioGroup
                  name="spacing"
                  aria-label="spacing"
                  value={spacing.toString()}
                  onChange={handleChange}
                  row
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                    <FormControlLabel
                      key={value}
                      value={value.toString()}
                      control={<Radio />}
                      label={value.toString()}
                    />
                  ))}
                </RadioGroup>
              </Grid>
            </Grid>
          </Paper>
        </Grid> */}
      {/* </Grid> */}
    </React.Fragment>
  );
}
// }
