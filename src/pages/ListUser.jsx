import SidebarAdmin from '../Component/SidebarAdmin'
import NavbarAdmin from '../Component/NavbarAdmin'
import Datatable from '../Component/Datatable';

const ListUser = () => {
    return(
        <div className='list'>
                <SidebarAdmin/>
                <div className='listContainer'>
                    <NavbarAdmin/>
                    <Datatable/>
                </div>
        </div>

    )
}
export default ListUser ;