import SidebarAdmin from '../Component/SidebarAdmin'
import NavbarAdmin from '../Component/NavbarAdmin'
import DataTableOccup from '../Component/DataTableOccup'

const ListUser = () => {
    return(
        <div className='list'>
                <SidebarAdmin/>
                <div className='listContainer'>
                    <NavbarAdmin/>
                    <DataTableOccup />
                  
                </div>
        </div>

    )
}
export default ListUser ;