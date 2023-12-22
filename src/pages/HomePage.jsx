import { Link } from "react-router-dom";
import phones from "../phones.json"

function HomePage(phones) {
    return (
        <>
            {
                phones.map((eachPhone) => {
                    return (
                        <Link to={`/phonedetails/${eachPhone.id}`} key={eachPhone.id}>
                            {eachPhone.name}
                        </Link>
                    )
                })
            }
        </>
    )

}

export default HomePage;