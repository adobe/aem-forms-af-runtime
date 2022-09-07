// material UI related dependencies
import {
    MuiPickersUtilsProvider,
    TimePicker,
    DatePicker
  } from "material-ui-pickers";
import MomentUtils from "@date-io/moment";
import React, { useContext } from 'react';
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import moment from 'moment'

// adaptive form core related dependencies
import {FieldJson, State} from '@aemforms/af-core';
import {useRuleEngine} from '@aemforms/af-react-renderer';

const DatePickerComp = function (props : any) {
    // fetch the props provided as per the form model definition
    const {
        id,
        name,
        value,
        visible,
        readOnly,
        enabled,
        description,
        label,
        required,
        format,
        valid,
        placeholder,
        error,
        errorMsg,
        onChange
    } = props;

    const {classes} = props;
    // this is internal state of component
    const initialDate = props.default != null ? moment(props.default, 'YYYY-MM-DD') : props.default;
    const [selectedDate, setSelectedDate] = React.useState(initialDate);
    // change handler to set the internal state
    const handleDateChange = (date: any) => {
        setSelectedDate(date);
        // update adaptive form runtime with the changed value
        // AF runtime considers YYYY-MM-DD as a valid date format
        props.onChange(date ? date.format('YYYY-MM-DD') : null);
    }

    // massage input props as per component definition of material UI
    const inputProps = {
        id,
        "aria-describedby" : `${id}-help`,
        name,
        //readOnly,
        required,
        //type : props.format ? props.format : "text",
        value : selectedDate,
        placeholder,
        onChange : handleDateChange,
        format : "MM/DD/YYYY",
        // handle clearing outside => pass plain array if you are not controlling value outside
        mask : (value: string) => {
            return value
              ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]
              : []
        },
        disableOpenOnEnter : true,
        animateYearScrolling : false,
        autoOk : true,
        clearable : true,
        onInputChange : (e: any) => console.log("Keyboard:", e.target.value),
    };

    const labelProps = {
        htmlFor : id,
        classes : { root : classes.root, formControl: classes.formControl }
    }

    return (
        visible === false ? null : (<FormControl error={error}>
                {((label.value && label.visible !== false) ? <InputLabel {...labelProps}>{required ? label.value + " * " : label.value}</InputLabel> : "")}
                <Grid container className={classes.grid} justify="space-around">
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <DatePicker {...inputProps}/>
                    </MuiPickersUtilsProvider>
                </Grid>
                <FormHelperText id={`${id}-help`}>{error ? errorMsg : description}</FormHelperText>
            </FormControl>
        )
    )
};

const styles: any = {
    grid: {
      width: "60%"
    },
    formControl : {
        position: "relative",
        top: "auto",
        left: "auto",
        transform: "initial"
    },
    root : {
        "font-size": "0.75rem"
    }
  };

const DateField =  (fieldState: State<FieldJson> | any) => {
    // get the classes sent by withStyles
    const { classes } = fieldState;
    // Binds the component's state to the Form and dynamically changing it depending upon
    // the rules written for that Field in the Form
    const [state, handlers] = useRuleEngine(fieldState);
    // convert form state as props
    const compProps = {
        ...state,
        classes,
        onChange : handlers.dispatchChange
    }
    return <DatePickerComp {...compProps} />;
};

export default withStyles(styles)(DateField)