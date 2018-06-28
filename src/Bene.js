import React from 'react';
import PropTypes from "prop-types";

import {
    withStyles,
} from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from "@material-ui/core/FormControl";

import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import classNames from 'classnames';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    textField: {
        flexBasis: 200,
    },
});

class Bene extends React.Component {
    constructor() {
        super();
        this.state = {
            benestudio: [
                {name: ''}
            ],
        };
    }

    handleBenestudioNameChange = (id, event) => {
        const benestudio = this.state.benestudio;
        benestudio[id] = {name: event.target.value};
        if (benestudio.length - 1 === id) {
            benestudio.push({name: ''});
        }
        this.setState({benestudio});
    };
    handleCancel = () => {
        document.getElementById("create-course-form").reset();
    };
    handleSaveBenestudio = (event) => {
        const arr = [];
        this.state.benestudio.map((v) => {
            if (v.name !== "") {
                arr.push(v.name)
            }
        });
        alert(arr);
    };
    handleRemoveBenestudio = (id) => () => {
        this.setState({
            benestudio: this.state.benestudio.filter((s, sidx) => id !== sidx)
        });
    };
    render() {
        const { classes } = this.props;
        return (
            <form onSubmit={this.handleCancel}
                  id="create-course-form"
            >
                <h4>Test</h4>
                {this.state.benestudio.map((benestudio, idx) => (
                    <div className={classes.root}>
                        <FormControl className={classNames(classes.margin, classes.textField)}>
                            <InputLabel> test attribute</InputLabel>
                            <Input
                                onChange={event => this.handleBenestudioNameChange(idx, event)}

                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        >
                                            <i
                                                aria-label="Toggle password visibility"
                                                type="button"
                                                onClick={this.handleRemoveBenestudio(idx)}
                                            >
                                                x
                                            </i>
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                ))}
                <div>
                    <AppBar position="static" style={{backgroundColor: '#87CEFA'}}>
                        <Toolbar>
                            <Button color="inherit"
                                    onClick={this.handleCancel}
                            >Cancel</Button>
                            <Button color="inherit"
                                    onClick={this.handleSaveBenestudio}
                            >Save</Button>
                        </Toolbar>
                    </AppBar>
                </div>
            </form>
        );
    }
}
Bene.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bene);