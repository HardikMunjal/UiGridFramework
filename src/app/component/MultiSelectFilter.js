import React from 'react';
import { Checkbox, FormControlLabel, FormGroup, Popover, Typography, IconButton } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const MultiSelectCheckboxFilter = ({ options, selectedValues, onChange, anchorEl, onClick, onClose }) => {
  const handleCheckboxChange = (event) => {
    const value = event.target.name;
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((item) => item !== value)
      : [...selectedValues, value];
    onChange(updatedValues);
  };

  return (
    <>
      <IconButton onClick={onClick}>
        <FilterListIcon />
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Typography variant="h6" sx={{ p: 2 }}>
          Filter
        </Typography>
        <FormGroup sx={{ p: 2 }}>
          {options.map((option) => (
            <FormControlLabel
              key={option}
              control={
                <Checkbox
                  checked={selectedValues.includes(option)}
                  onChange={handleCheckboxChange}
                  name={option}
                />
              }
              label={option}
            />
          ))}
        </FormGroup>
      </Popover>
    </>
  );
};

export default MultiSelectCheckboxFilter;