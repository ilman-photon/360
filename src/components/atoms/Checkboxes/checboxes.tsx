import React from "react";
import "./checkboxes.css";

interface CheckboxesProps {
  /**
   * Is this the principal call to action on the page?
   */
  selected?: boolean;
  /**
   * What background color to use
   */
  disable?: boolean;
  /**
   * Checkboxes contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Checkboxes = ({
  selected = false,
  disable = false,
  label,
  ...props
}: CheckboxesProps) => {
  return (
    <label className="storybook-container-checkboxes">
      {label}
      <input type="checkbox" checked={selected} disabled={disable} {...props} />
      <span className="checkmark"></span>
    </label>
  );
};
