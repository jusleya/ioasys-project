import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

// import "./css/style.css";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function InputWithIcon(props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <img src={props.img} alt=""/>
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid"
              label={props.label}
              name={props.name}
              onChange={props.onChange}
              type={props.type}
              value={props.value}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default InputWithIcon;