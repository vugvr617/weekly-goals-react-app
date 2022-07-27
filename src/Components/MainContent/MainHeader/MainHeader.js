import AddButton from "./AddButton/AddButton"
import ListIcon from "./ListIcon"

export default function MainHeader () {
    return (
        <div className="main-header">
            <div>
                <ListIcon></ListIcon>
                <p>3 Goals</p>
            </div>
            <AddButton></AddButton>
        </div>
    )
}