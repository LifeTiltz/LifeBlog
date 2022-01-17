import deleteButton from "./images/deleteButton.svg"
import { projFireStore } from './fireBase';
import { useHistory } from 'react-router-dom'
import GetDataAgain from "./GetDataAgain";

export default function DeleteButton({ id }) {
    const history = useHistory()


    const handleClick = (id) => {
        projFireStore.collection("books").doc(id).delete()
        history.push('/LifeBlog');
        let test = GetDataAgain()
        console.log(test);
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
