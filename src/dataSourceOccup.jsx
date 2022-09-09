

export const userColumns=[
    { field: 'id', headerName: 'ID', width: 70 },
    {field: 'occupation', headerName:'Occupation', width:300, renderCell: (params)=> {
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt=""/>
                {params.row.category}
            </div>
        );
    },},
    { field: 'Timestamp' , headerName: 'Date creation', width: 400 },
    { field: 'NumberEmployees', headerName: 'Number of employees', width: 200 },
    

];

