import { Checkbox, FormControlLabel } from "@mui/material";
import { useEffect, useState } from "react";

export default function CustomCheckbox({
  clear,
  onChange,
  label,
  key,
  checked,
}) {
  const [isChecked, setChecked] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const check = checked();
    setChecked(check);
  });

  return (
    <FormControlLabel
      control={<Checkbox value={label} checked={isChecked} />}
      label={label}
      key={key}
      onChange={(event) => {
        setChecked(event.target.checked);
        const target = event.target;
        onChange(target);
      }}
    />
  );
}
