import * as React from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import StyledInput from "../atoms/Input/input";
import { CircularProgress } from "@mui/material";

const filter = createFilterOptions();

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export const AutoCompleteCreatable = ({
  isLoading = false,
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
  const loading = open && options.length === 0 && isLoading;

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
  }, [open, onInputEmpty]);

  return (
    <Autocomplete
      data-testid={props.testId}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      value={props.value}
      //   onChange={props.onChange}
      onChange={(_e, newValue) => {
        console.log({ newValue });
        if (typeof newValue === "string") {
          props.onChange({
            label: newValue,
          });
        } else if (newValue && newValue.value) {
          // Create a new value from the user input
          props.onChange({
            id: newValue.id,
            label: newValue.label,
            value: newValue.value,
          });
        } else {
          props.onChange(newValue);
        }
      }}
      isOptionEqualToValue={(option, value) => {
        if (value.label) {
          return option.label === value.label;
        } else if (value) {
          return option.label === value;
        } else {
          return false;
        }
      }}
      filterOptions={(optionsContext, params) => {
        const filtered = filter(optionsContext, params);
        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = optionsContext.some(
          (option) => inputValue === option.label
        );
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            id: Math.floor(Math.random() * 100000),
            label: `Add "${inputValue}"`,
            value: inputValue,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      options={options}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.value) {
          return option.value;
        }
        // Regular option
        return option.label;
      }}
      loading={loading}
      ListboxProps={{
        sx: {
          fontSize: 14,
        },
      }}
      //   renderOption={(props, option) => <li {...props}>{option.label}</li>}
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
    />
  );
};
