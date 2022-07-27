import './SideSection.css'
import SideHeader from './SideHeader'
import SideForm from './SideForm'
import SideStats from './SideStats'

export default function SideSection () {
    return (
        <div className='side-section'>
            <SideHeader></SideHeader>
            <SideForm></SideForm>
            <SideStats></SideStats>
        </div>
    )
}