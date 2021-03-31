import logo from './logo.svg';
import { Grid, Typography, Button, Paper} from "@material-ui/core";
import { ThemeProvider, createMuiTheme} from "@material-ui/core";

function App() {
  const theme = createMuiTheme({
    palette:{
      type:"dark",
    },
  });
    
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{height:"100vh"}}>
        <Grid container direction="column">
          <Typography variant="h1">This is my App!</Typography>
          <Button variant="contained" color="primary">
            This is a button
          </Button>
          <Button variant="contained" color="secondary">
            This is another button
          </Button>
        </Grid>
      </Paper>
    </ThemeProvider>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
