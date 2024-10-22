import Select from "react-select";

const colourStyles= {
  control: (styles) => ({
    ...styles,
    background: '#333 !important',
    width: "220px",
    border: "1px solid #555",
    cursor: "pointer"
  }),
  menu: (styles) => ({
    ...styles,
    background: '#333 !important',
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    borderBottom: '1px solid #555',
    background: isSelected ? "#9584c2" : "transparent",
    padding: '5px 8px',
    cursor: "pointer"
  }),
  input: (styles) => ({ ...styles, color: "#fff"}),
  placeholder: (styles) => ({ ...styles }),
  singleValue: (styles) => ({ ...styles, color: "#fff"}),
};

const SelectDefault = ({options,value, onChange}) => {

  return (
    <Select
      styles={colourStyles}
      defaultValue={value}
      name="color"
      isSearchable={false}
      options={options}
      value={value}
      inputValue=""
      onChange={(v) => onChange(v)}
     />
  )
}

export {
  SelectDefault
}