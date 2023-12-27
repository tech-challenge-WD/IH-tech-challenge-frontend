import { Link } from "react-router-dom";
import phones from "../phones.json"
import { useEffect, useState } from "react";
import axios from "axios";



function HomePage() {
    const [phones, setPhones] = useState([]);
    const BACKEND_ROOT = import.meta.env.VITE_SERVER_URL;

    useEffect(() => {
        axios.get(`${BACKEND_ROOT}/api/phones`)
            .then((response) => {
                setPhones(response.data)
                //console.log(response.data)
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <h2> HOME PAGE</h2>
            {phones.map((eachPhone) => {
                
                return (
                    
                        <div key={eachPhone.id}>
                            <Link to={`/phones/${eachPhone.id}`} >
                                <p>
                                    {eachPhone.name}
                                </p>
                                <img src={`./phones-images/${eachPhone.imageFileName}`} alt={eachPhone.name} />
                            </Link>
                        </div>

                
                )
            })}
        </>
    )

}

export default HomePage;