import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import EditableDialog from './EditableDialog';
import axios from 'axios';
import MultiSelectCheckboxFilter from './MultiSelectCheckboxFilter';
import EditIcon from '@mui/icons-material/Edit';

// Custom styling for DataGrid
const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  '& .MuiDataGrid-row:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '& .MuiDataGrid-row:nth-of-type(even)': {
    backgroundColor: 'white',
  },
  '& .MuiDataGrid-cell': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  '& .MuiDataGrid-columnHeaderTitleContainer': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  '& .MuiDataGrid-root': {
    overflow: 'auto',
    border: 'none !important',
    borderStyle: 'none',
    borderColor: 'none',
  },
}));

const DataTable = ({ datatypeProps }) => {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState({});
  const [filters, setFilters] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeColumn, setActiveColumn] = useState('');
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 5 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('/api/getList', { datatypeProps });
        if (response.status === 200) {
          const { rows, columns } = response.data.data;
          setRows(rows || []);
          setColumns(columns || []);
        } else {
          console.error('Error fetching data:', response);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [datatypeProps]);

  const handleEditClick = (row) => {
    setEditData(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditData({});
  };

  const handleInputChange = (name, value) => {
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveClick = async () => {
    await axios.post('/api/update', { editData, datatypeProps });
    const updatedRows = rows.map(row =>
      row.id === editData.id ? editData : row
    );
    setRows(updatedRows);
    handleClose();
  };

  const handleFilterClick = (event, field) => {
    setAnchorEl(event.currentTarget);
    setActiveColumn(field);
  };

  const handleFilterChange = (selectedValues) => {
    setFilters((prev) => ({ ...prev, [activeColumn]: selectedValues }));
    setAnchorEl(null);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setActiveColumn('');
  };

  const handleClearAllFilters = () => {
    setFilters({});
  };

  const filteredRows = rows.filter(row =>
    Object.keys(filters).every(column =>
      filters[column].includes(row[column]) || filters[column].length === 0
    )
  );

  const handlePaginationModelChange = (model) => {
    setPaginationModel(model);
  };

  const columnsWithEdit = [
    {
      field: 'edit',
      headerName: 'Edit',
      width: 100,
      renderCell: (params) => (
        <IconButton onClick={() => handleEditClick(params.row)}>
          <EditIcon />
        </IconButton>
      ),
    },
    ...columns,
  ];

  const columnHeadersWithFilter = columnsWithEdit.map((column) => ({
    ...column,
    renderHeader: (params) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {column.headerName}
        <MultiSelectCheckboxFilter
          options={[...new Set(rows.map(row => row[column.field]))]} // Unique values for the column
          selectedValues={filters[column.field] || []}
          onChange={handleFilterChange}
          anchorEl={activeColumn === column.field ? anchorEl : null}
          onClick={(event) => handleFilterClick(event, column.field)}
          onClose={handlePopoverClose}
        />
      </Box>
    ),
  }));

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <Box sx={{ mb: 2 }}>
        <Button onClick={handleClearAllFilters} variant="outlined">
          Clear All Filters
        </Button>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Stack direction="row" spacing={1}>
          {Object.keys(filters).map((field) =>
            filters[field].map((value) => (
              <Chip
                key={`${field}-${value}`}
                label={`${field}: ${value}`}
                onDelete={() => {
                  const updatedValues = filters[field].filter(v => v !== value);
                  setFilters(prev => ({
                    ...prev,
                    [field]: updatedValues
                  }));
                }}
              />
            ))
          )}
        </Stack>
      </Box>
      <StyledDataGrid
        rows={filteredRows}
        columns={columnHeadersWithFilter}
        pagination
        pageSize={paginationModel.pageSize}
        rowsPerPageOptions={[5]} // Set options for rows per page
        paginationModel={paginationModel} // Control pagination state
        onPaginationModelChange={handlePaginationModelChange} // Handle pagination change
        disableColumnFilter={true} // Disable built-in filter
      />
      <EditableDialog
        open={open}
        onClose={handleClose}
        data={editData}
        datatypeProps={datatypeProps}
        onSave={handleSaveClick}
        onChange={handleInputChange}
      />
    </Box>
  );
};

export default DataTable;
