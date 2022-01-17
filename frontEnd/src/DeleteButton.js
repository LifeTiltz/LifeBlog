import deleteButton from "./images/deleteButton.svg"
import { projFireStore } from './fireBase';
import { useHistory } from 'react-router-dom'

export default function DeleteButton({ id }) {

    const handleClick = (id) => {
        projFireStore.collection("books").doc(id).delete()
        useHistory.push('/LifeBlog');
    }

    return (
        <>
            <img
                className="delete"
                src={deleteButton}
                onClick={() => handleClick(id)}
            />
        </>
    )
}
