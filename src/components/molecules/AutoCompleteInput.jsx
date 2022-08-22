import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import StyledInput from "../atoms/Input/input";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export const AutoCompleteInput = ({
  options = [],
  onFetch = () => {
    // This is intended
  },
  onInputEmpty = () => {
    // This is intended
  },
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        onFetch();
      }
    })();

    return () => {
      active = false;
    };
  }, [loading, onFetch]);

  React.useEffect(() => {
    if (!open) {
      onInputEmpty();
    }
  }, [open]);

  return (
    <Autocomplete
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      defaultValue={props.defaultValue}
      isOptionEqualToValue={(option, value) => {
        console.log({ option, value });
        if (value.label) {
          return option.label === value.label;
        } else if (value) {
          return option.label === value;
        } else {
          return false;
        }
      }}
      getOptionLabel={(option) => (option.label ? option.label : "")}
      options={options}
      loading={loading}
      ListboxProps={{
        sx: {
          fontSize: 14,
        },
      }}
      renderOption={(params, option) => {
        return (
          <li {...params} key={option.id}>
            {option.label}
          </li>
        );
      }}
      renderInput={(params) => {
        return (
          <StyledInput
            type="text"
            {...params}
            label={props.inputLabel}
            error={props.error}
            helperText={props.helperText}
            InputProps={{
              ...params.InputProps,
              sx: { height: 52 },
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        );
      }}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export default AutoCompleteInput;
