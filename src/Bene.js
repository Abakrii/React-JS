import React from 'react';
import PropTypes from "prop-types";
import {withStyles,} from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
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
        width:"100%"
    },
    container: {
        flexGrow: 1,
    },
    text: {

        textAlign: "center",
        color: theme.palette.text.secondary,
        marginTop: 10,

    },
    collection: {
        padding: theme.spacing.unit * 2,
        textAlign: "center",
        color: theme.palette.text.secondary,
        marginTop: 10,
        paddingRight: 300
    }
});

class Bene extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                {name: ''}
            ],
        };
    }

    handleItemsNameChange = (id, event) => {
        const items = this.state.items;
        items[id] = {name: event.target.value};
        if (items.length - 1 === id) {
            items.push({name: ''});
        }
        this.setState({items});
    };

    handleSaveItems = () => {
        const arr = [];
        this.state.items.map((v) => {
            return v.name !== "" ? arr.push(v.name) : ""
        });
        alert(arr);
    };

    handleRemoveItems = (id) => () => {
        if (id !== 0) {
            this.setState({
                items: this.state.items.filter((s, sid) => id !== sid)
            });
        }
    };

    render() {
        const {classes} = this.props;
        return (

            <form>
                <div className={classes.container}>
                    <Grid container spacing={24}>
                        <Grid item md={3} xs={12} className={classes.text}>
                            <p style={{textAlign:"left",paddingLeft:"20px",margin:0}}>Test</p>
                        </Grid>
                        <Grid item md={9} xs={12} className={classes.collection}>
                            {this.state.items.map((items, id) => (
                                <div className={classes.root} key={id}>
                                    <Grid item md={9} xs={12}>
                                        <FormControl className={classNames(classes.margin, classes.textField)}>
                                            <InputLabel>test attribute</InputLabel>
                                            <Input
                                                onChange={event => this.handleItemsNameChange(id, event)}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton>
                                                            <i
                                                                aria-label="Toggle password visibility"
                                                                type="button"
                                                                onClick={this.handleRemoveItems(id)}>×
                                                            </i>
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </Grid>
                                </div>
                            ))}
                        </Grid>
                    </Grid>
                    <div>
                        <AppBar position="static" style={{backgroundColor: '#87CEFA'}}>
                            <Toolbar style={{justifyContent:"flex-end"}}>
                                <Button color="inherit"
                                >Cancel</Button>
                                <Button color="inherit"
                                        onClick={this.handleSaveItems}
                                >Save</Button>
                            </Toolbar>
                        </AppBar>
                    </div>
                </div>
            </form>
        );
    }

}

Bene.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Bene);