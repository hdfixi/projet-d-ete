import SidebarAdmin from '../Component/SidebarAdmin'
import NavbarAdmin from '../Component/NavbarAdmin'
import Widget from '../Component/Widget'
import Chart from '../Component/Chart';

const Dashboard = () => {
    return(
        <>
            <div className='Home'>
                <SidebarAdmin/>
                <div className='homeContainer'>
                    <NavbarAdmin/>
                    <div className='widgets'>
                        <Widget type="user"/>
                        <Widget type="ads"/>
                        <Widget type="comment"/>
                        <Widget type="occupation"/>
                    </div>
                    {/* <div className='listContainer'>
                        <div className='listTitle'>Lates occupation</div>
                        <Occupation/>
                    </div> */}
                    <div className='charts'>
                        <Chart/>
                    </div>
                </div>
            </div>
        </>

    )
}; 
export default Dashboard ;