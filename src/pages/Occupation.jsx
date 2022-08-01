import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import img1 from '../images/jardinage.jpg';
import img2 from '../images/menage.jpg';

const Occupation = () => {
    const rows= [
        {
            id:22525,
            occupation:"jardinage",
            img:<img src={img1} className="rowimage"/>,
            number:30,
            date:"21 march",
        },

        {
            id:22555,
            occupation:"ménage",
            img:<img src={img2} className="rowimage"/>,
            number:52,
            date:"21 july",
        }
    ]
      

    return(
        <div className="table">
            <TableContainer component={Paper} className="table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Id</TableCell>
                        <TableCell className="tableCell">Occupation name</TableCell>
                        <TableCell className="tableCell">Number of employees</TableCell>
                        <TableCell className="tableCell">Date last request</TableCell>
                        <TableCell className="tableCell">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.id}
                        >
                        <TableCell className="tableCell">{row.id}</TableCell>
                        <TableCell align="right">
                            <div className="cellWrapper">
                                {row.img}{row.occupation}
                            </div>
                        </TableCell>
                        <TableCell className="tableCell">{row.number}</TableCell>
                        <TableCell className="tableCell">{row.date}</TableCell>
                        <TableCell className="tableCell">
                            <button className="btn btn-outline-dark me-2">Edit</button>
                            <button className="btn btn-outline-dark me-2">Delete</button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )

}
export default Occupation;