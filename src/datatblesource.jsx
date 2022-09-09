

export const userColumns=[
    { field: 'id', headerName: 'ID' },
    {field: 'name', headerName:'Name',width:230,  renderCell: (params)=> {
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.userImage} alt=""/>
                
                {params.row.name}
            </div>
        );
    },},
    { field: 'email', headerName: 'Email',width:200 },
    { field: 'location', headerName: 'Location' },
    { field: 'Occupation', headerName: 'Occupation' },
    { field: 'phone', headerName: 'Phone' },
    
    

];

export const addColumns=[
    { field: 'id', headerName: 'ID', width: 70 },
    {field: 'name', headerName:'Name', width:230, renderCell: (params)=> {
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.userImage} alt=""/>
                {params.row.username}
            </div>
        );
    },},
    {field: 'add', headerName:'Add', width:230, renderCell: (params)=> {
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.addImage} alt=""/>
                
                {params.row.label}
            </div>
        );
    },},
    { field: 'Timestamp', headerName: 'Date creation', width: 200 },
    { field: 'category', headerName: 'Category' },
    { field: 'description', headerName: 'Description', width: 150 ,outerHeight:230},
    { field: 'price', headerName: 'Price' },
    
    

];