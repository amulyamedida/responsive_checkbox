import React, { useState } from "react";
import CheckboxItem from "./CheckboxItem";

function CheckboxTree() {
  const initialState = {
    fruits: {
      checked: false,
      items: {
        apple: false,
        banana: false,
        orange: false,
      },
    },
    vegetables: {
      checked: false,
      items: {
        carrot: false,
        broccoli: false,
        spinach: false,
      },
    },
  };

  const [state, setState] = useState(initialState);

  const allChecked = (obj) => Object.values(obj).every(Boolean);
  const someChecked = (obj) => Object.values(obj).some(Boolean);

  
  const calculateSelectAll = (newState) => {
    const allFruits = allChecked(newState.fruits.items);
    const allVegetables = allChecked(newState.vegetables.items);
    return allFruits && allVegetables;
  };

  const handleSelectAll = () => {
    const newAll = !allChecked({
      ...state.fruits.items,
      ...state.vegetables.items,
    });

    const newState = {
      fruits: {
        checked: newAll,
        items: Object.fromEntries(
          Object.keys(state.fruits.items).map((k) => [k, newAll])
        ),
      },
      vegetables: {
        checked: newAll,
        items: Object.fromEntries(
          Object.keys(state.vegetables.items).map((k) => [k, newAll])
        ),
      },
    };

    setState(newState);
  };

  const handleParentChange = (parent) => {
    const newChecked = !state[parent].checked;

    const newState = {
      ...state,
      [parent]: {
        checked: newChecked,
        items: Object.fromEntries(
          Object.keys(state[parent].items).map((k) => [k, newChecked])
        ),
      },
    };

    setState(newState);
  };

  const handleChildChange = (parent, child) => {
    const newItems = {
      ...state[parent].items,
      [child]: !state[parent].items[child],
    };

    const newParentChecked = allChecked(newItems);

    setState({
      ...state,
      [parent]: {
        checked: newParentChecked,
        items: newItems,
      },
    });
  };

  const fruitsIndeterminate =
    someChecked(state.fruits.items) && !allChecked(state.fruits.items);
  const vegetablesIndeterminate =
    someChecked(state.vegetables.items) &&
    !allChecked(state.vegetables.items);

  const allIndeterminate =
    (state.fruits.checked || fruitsIndeterminate || state.vegetables.checked || vegetablesIndeterminate) &&
    !calculateSelectAll(state);

  const selectAllChecked = calculateSelectAll(state);

  return (
    <div className="container" style={{ marginTop: "2rem" }}>
      <h2>Nested Checkbox Example</h2>

      <CheckboxItem
        label="Select All"
        checked={selectAllChecked}
        indeterminate={allIndeterminate}
        onChange={handleSelectAll}
      />

      <div style={{ marginLeft: "20px" }}>
        <CheckboxItem
          label="Fruits"
          checked={state.fruits.checked}
          indeterminate={fruitsIndeterminate}
          onChange={() => handleParentChange("fruits")}
        />
        <div style={{ marginLeft: "20px" }}>
          {Object.keys(state.fruits.items).map((fruit) => (
            <CheckboxItem
              key={fruit}
              label={fruit.charAt(0).toUpperCase() + fruit.slice(1)}
              checked={state.fruits.items[fruit]}
              indeterminate={false}
              onChange={() => handleChildChange("fruits", fruit)}
            />
          ))}
        </div>
      </div>

      <div style={{ marginLeft: "20px" }}>
        <CheckboxItem
          label="Vegetables"
          checked={state.vegetables.checked}
          indeterminate={vegetablesIndeterminate}
          onChange={() => handleParentChange("vegetables")}
        />
        <div style={{ marginLeft: "20px" }}>
          {Object.keys(state.vegetables.items).map((veg) => (
            <CheckboxItem
              key={veg}
              label={veg.charAt(0).toUpperCase() + veg.slice(1)}
              checked={state.vegetables.items[veg]}
              indeterminate={false}
              onChange={() => handleChildChange("vegetables", veg)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CheckboxTree;
