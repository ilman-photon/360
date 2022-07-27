// import * as React from "react";
import React, { useEffect, useRef } from "react";
import { LabelWithIcon } from "../../atoms/LabelWithIcon/labelWithIcon";
import { useForm } from "react-hook-form";
import { Collapse } from "@mui/material";

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
        <div style={{ display: "block", margin: 8, paddingBottom: 16 }} >
            <Collapse in={props.isShowValidation}>
                {
                    validator.map((err,i) => {
                        return <LabelWithIcon key={i} error={err.validate} label={err.label} />
                    })
                }
            </Collapse>
        </div >
    );
}

export default PasswordValidator