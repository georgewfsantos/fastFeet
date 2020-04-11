const customStyles = {
  container: provided => ({
    ...provided,
    display: 'inline-block',
    width: '405px',
    minHeight: '1px',
    textAlign: 'left',
    alignItems: 'center',
    marginTop: '15px',
  }),
  control: provided => ({
    ...provided,
    border: '1px solid #dddddd',
    borderRadius: '4px',
    minHeight: '1px',
    height: '45px',
  }),
  input: provided => ({
    ...provided,
    minHeight: '1px',
    height: '45px',
    alignItems: 'center',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    minHeight: '1px',
    paddingTop: '0',
    paddingBottom: '0',
    color: '#757575',
  }),
  indicatorSeparator: provided => ({
    ...provided,
    minHeight: '1px',
    height: '24px',
  }),
  clearIndicator: provided => ({
    ...provided,
    minHeight: '1px',
  }),
  valueContainer: provided => ({
    ...provided,
    minHeight: '1px',
    height: '40px',
    paddingTop: '0',
    paddingBottom: '0',
    alignItems: 'center',
  }),
  singleValue: provided => ({
    ...provided,
    minHeight: '1px',
    paddingBottom: '2px',
  }),

  placeholder: provided => ({
    ...provided,
    alignItems: 'center',
  }),
};

export default customStyles;
