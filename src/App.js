import React, { useEffect } from "react";
import Draggable from "react-draggable";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

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
  const [spacing, setSpacing] = React.useState(10);
  const [line, setLine] = React.useState(null);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  useEffect(() => {
    let line1 = new window.LeaderLine(
      document.getElementById("start1"),
      document.getElementById("end1")
    );
    setLine(line1);
  }, []);
  // eventLogger = (e, data) => {
  //   console.log("Event: ", e);
  //   console.log("Data: ", data);
  // };

  // componentDidMount() {
  //   new window.LeaderLine(
  //     document.getElementById("start"),
  //     document.getElementById("end")
  //   );
  // }
  const handleDrag = () => {
    line.position();
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
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[1, 1]}
          scale={1}
        >
          <div
            id="start1"
            className="handle"
            style={{
              float: "left",
              padding: "10px",
              marginRight: "50px",
              border: "1px solid black",
              width: "20%"
            }}
          >
            <div className="whole">
              <div>This readme is really dragging on...</div>
            </div>
          </div>
        </Draggable>
      </div>

      <div
        style={{
          float: "right",
          padding: "20px",
          border: "1px solid black",
          width: "20%"
        }}
        id="end1"
      >
        facebook
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
