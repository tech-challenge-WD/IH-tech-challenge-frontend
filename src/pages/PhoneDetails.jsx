import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Blocks } from 'react-loader-spinner'

function PhoneDetails() {
  const [phone, setPhones] = useState({});
  const [fetchingPhone, setFetchingPhone] = useState(true);
  const navigate = useNavigate();
  const { phoneId } = useParams();
  const BACKEND_ROOT = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {

    setTimeout(() => {
      if (!phone) {
        navigate("/not-found")
        return
      }
      axios.get(`${BACKEND_ROOT}/phones/${phoneId}`)
        .then((response) => {
          setPhones(response.data)
          console.log(response.data)
          setFetchingPhone(false)
        })
        .catch((error) => console.log(error));
    }, 600)
  }, [phoneId]);

  if (fetchingPhone) {
    return <Blocks animation="border"/>
  }

  return (
    <>
   
    <div>

      <p>{phone.name}</p>
      <p>{phone.manufacturer}</p>
      <p>{phone.description}</p>
      <p>{phone.color}</p>
      <p>{phone.price}</p>
      <img src={`../phones-images/${phone.imageFileName}`} />
      <p>{phone.screen}</p>
      <p>{phone.processor}</p>
      <p>{phone.ram}</p>
    </div>
    </>

  )

}

export default PhoneDetails;
/* 
<ul>
        {phones.map((phone) => {
          <li>
            <p>{phone.name}</p>
            <p>{phone.manufacturer}</p>
            <p>{phone.description}</p>
            <p>{phone.color}</p>
            <p>{phone.price}</p>
            <p>{phone.imageFileName}</p>
            <p>{phone.screen}</p>
            <p>{phone.processor}</p>
            <p>{phone.ram}</p>
          </li>
        })}
      </ul> */