import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function AtlasInfo() {
  const [info, setInfo] = useState({});
  const [query] = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const queryS = query.get("s") || "mexico";
    doApi(queryS);
  }, [query]);

  const doApi = async (_searchQ) => {
    setLoading(true);
    // כדי להעלים את המידע בין חיפוש למדינה אחרת
    setInfo({});
    const url = `https://restcountries.com/v3.1/name/${_searchQ}`;
    const resp = await axios.get(url);
    console.log(resp.data);
    let country = resp.data[0];

    if (resp.data.length > 0) {
      country.languagesString = "";
      for (let key in country.languages) {
        country.languagesString += country.languages[key] + ", ";
      }
      setInfo(country);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      {loading && <h2>Loading...</h2>}
      {!loading && info.region && (
        <article>
          <img
            src={info.flags.png}
            className="col-4 float-start shadow me-3"
            alt="flag"
          />
          <h2>{info.name.common}</h2>
          <div>Capital: {info.capital[0]}</div>
          <div>Pop: {info.population.toLocaleString()}</div>
          <div>Language: {info.languagesString}</div>
          {/* <div>Coin: Banana</div> */}
          <iframe
            src={`https://maps.google.com/maps?q=${
              info.latlng[0] + "," + info.latlng[1]
            }&z=5&ie=UTF8&iwloc=&output=embed`}
            width="50%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </article>
      )}
    </div>
  );
}
