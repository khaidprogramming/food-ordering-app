import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return(
        <div>
            <h1>Ooops!!!</h1>
            <h2>Could not find the page</h2>
            <h2>{error.status}</h2>
        </div>
    )
}

export default Error