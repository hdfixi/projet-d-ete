import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';


const Occupation = () => {
    const [data, setData] = useState([]) ;
    const [filter, setFilter] = useState(data);
    const [loadiing, setLoading] = useState(false);
    let ComponentMounted = true ;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(ComponentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }
            return() => {
                ComponentMounted = false;
            }
        }
        getProducts();

    },[]);

    const Loading = () => {
        return(
            <>
                loading..
            </>
        )
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons">
                    <button className="btn btn-outline-dark me-2">all</button>
                    <button className="btn btn-outline-dark me-2">Men's closing</button>
                    <button className="btn btn-outline-dark me-2">women's closing</button>
                </div>
                <Table striped className="tableOccupation">
                                <thead>
                                        <tr>
                                            <th className="col-md-1">#</th>
                                            <th className="col-md-3">Occupation Name</th>
                                            <th className="col-md-3">Number of Employees</th>
                                            <th className="col-md-4">Action</th>
                                        </tr>
                                    </thead>
                </Table>
                {filter.map((product)=>{
                    return(
                        <>
                            <div className="list container">
                            
                                <Table striped className="tableOccupation">
                                    <tbody>
                                        <tr>
                                            <td className="col-md-1">{product.id}</td>
                                            <td className="col-md-3">{product.title}</td>
                                            <td className="col-md-3">{product.price}</td>
                                            <td className="col-md-4"><button className="btn btn-outline-dark me-2">Edit</button>
                                            <button className="btn btn-outline-dark me-2">Delete</button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </>
                    )
                })}
            </>
        );
    }


    return (
    <div className="container my-5 py-5">
        <div className="row justify-content-center">
            {loadiing ? <Loading/> : <ShowProducts/>}
        </div>

    </div>
);

}
export default Occupation ;