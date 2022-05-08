import useFetch from "./useFetch"

export default function RandomShake() {
    let poems = useFetch("https://www.poemist.com/api/v1/randompoems").data

    return (
        <div className="poems">
            {!poems && <h2>Sorry this API endpoint is slooowwww. We're Loading(iHope)</h2>}
            {poems && <h3>{poems[0].content}</h3>}
            {poems && <h2>{poems[0].title}</h2>}
            {poems && <h4>Author: {poems[0].poet.name}</h4>}
        </div>
    )
}
