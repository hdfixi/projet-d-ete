import SidebarAdmin from '../Component/SidebarAdmin'
import NavbarAdmin from '../Component/NavbarAdmin'
import DataTableAdd from '../Component/DataTableAdds';

const Ads = () => {
    return(
        <>
            <div className='Home'>
                <SidebarAdmin/>
                <div className='homeContainer'>
                    <NavbarAdmin/>
                    <div className='datable'>
                        <DataTableAdd/>
                    
                    </div>
                </div>
            </div>
        </>

    )
}; 
export default Ads ;