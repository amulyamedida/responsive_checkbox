import React from "react";

function CheckboxItem({ label, checked, indeterminate, onChange }) {
  const checkboxRef = React.useRef();

  React.useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label style={{ display: "block", margin: "5px 0" }}>
      <input
        type="checkbox"
        ref={checkboxRef}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
}

export default CheckboxItem;
