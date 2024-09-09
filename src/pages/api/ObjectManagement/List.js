const dummyResponseJSON={
    "rows": [
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, country: 'USA', jobTitle: 'Developer' },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, country: 'UK', jobTitle: 'Manager' },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, country: 'Canada', jobTitle: 'Engineer' },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, country: 'Australia', jobTitle: 'Student' },
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 25, country: 'New Zealand', jobTitle: 'CEO' },
      { id: 6, lastName: 'Melisandre', firstName: null, age: 150, country: 'Germany', jobTitle: 'Consultant' },
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, country: 'Italy', jobTitle: 'Designer' },
      { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, country: 'France', jobTitle: 'Architect' },
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, country: 'Spain', jobTitle: 'Analyst' },
      { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35, country: 'USA', jobTitle: 'Developer' },
      { id: 11, lastName: 'Lannister', firstName: 'Cersei', age: 42, country: 'UK', jobTitle: 'Manager' },
      { id: 12, lastName: 'Lannister', firstName: 'Jaime', age: 45, country: 'Canada', jobTitle: 'Engineer' },
      { id: 13, lastName: 'Stark', firstName: 'Arya', age: 16, country: 'Australia', jobTitle: 'Student' },
      { id: 14, lastName: 'Targaryen', firstName: 'Daenerys', age: 25, country: 'New Zealand', jobTitle: 'CEO' },
      { id: 15, lastName: 'Melisandre', firstName: null, age: 150, country: 'Germany', jobTitle: 'Consultant' },
    //   {
    //     id: 16,
    //     field: 'edit',
    //     headerName: 'Edit',
    //     width: 100,
    //     renderCell: (params) => (
    //       <Button onClick={() => handleEditClick(params.row)}>Edit</Button>
    //     ),
    //   },
    ],
    "totalRows": 15, // Total number of rows available
    "columns": [
      { "field": "id", "headerName": "ID", "flex": 1, "minWidth": 90 },
      { "field": "firstName", "headerName": "First Name", "flex": 2, "minWidth": 150, "editable": true },
      { "field": "lastName", "headerName": "Last Name", "flex": 2, "minWidth": 150, "editable": true },
      { "field": "age", "headerName": "Age", "type": "number", "flex": 1, "minWidth": 170, "editable": true },
      { "field": "country", "headerName": "Country", "flex": 1.5, "minWidth": 130, "editable": true },
      { "field": "jobTitle", "headerName": "Job Title", "flex": 2, "minWidth": 160, "editable": false },
    //   {
    //     "field": "edit",
    //     "headerName": "Edit",
    //     "width": 100,
    //     "renderCell": "Edit Button"
    //   }
    ]
  }
  
  export default function getListObject() {
     return dummyResponseJSON;
  }