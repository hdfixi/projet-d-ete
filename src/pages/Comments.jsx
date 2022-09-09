import SidebarAdmin from '../Component/SidebarAdmin'
import NavbarAdmin from '../Component/NavbarAdmin'
import Comment from '../Component/Comment'

const Comments = () => {
    return(
        <>
            <div className='Home'>
                <SidebarAdmin/>
                <div className='homeContainer'>
                    <NavbarAdmin/>
                    <div className='charts'>
                        <Comment/>
                    
                    </div>
                </div>
            </div>
        </>

    )
}; 
export default Comments ;