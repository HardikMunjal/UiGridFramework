import React from 'react';
import { Checkbox, FormControlLabel, FormGroup, Popover, Typography, IconButton, Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const MultiSelectCheckboxFilter = ({ options, selectedValues, onChange, anchorEl, onClick, onClose }) => {
  const handleCheckboxChange = (event) => {
    const value = event.target.name;
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((item) => item !== value)
      : [...selectedValues, value];
    onChange(updatedValues);
  };

  const handleClearAll = () => {
    onChange([]); // Clear all selected values
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
        <Button onClick={handleClearAll} variant="outlined" sx={{ m: 2 }}>
          Clear All
        </Button>
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
