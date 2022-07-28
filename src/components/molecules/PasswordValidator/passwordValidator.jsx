// import * as React from "react";
import React, { useEffect, useRef } from "react";
import { LabelWithIcon } from "../../atoms/LabelWithIcon/labelWithIcon";
import { useForm } from "react-hook-form";
import { Divider, Typography } from "@mui/material";
import { styles } from "./style"

export const PasswordValidator = ({ ...props }) => {
    const validator = props.validator || []
    let isValid = true
    if (props.password) {
        //validate
        validator.forEach(element => {
            if (element.validate) isValid = false
        })
    }

    return (
        <div style={{ display: "block" }} >
            {props.isShowValidation ?
                <>
                    {validator.map((err,i) => { 
                        // return {err.text ? <Typography variant="h3"> {err.text}  </Typography>:
                         return err.text ? <Typography variant="h3" sx={styles.textStyles}>{err.label}</Typography> : <LabelWithIcon key={i} error={err.validate} label={err.label} />
                    })}
                </> : null}
        </div >
    );
}

export default PasswordValidator