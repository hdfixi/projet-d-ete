import React, { createContext, useState, useEffect } from 'react';

// import data
import { db } from "../firebase-config";
import {
  collection,
  doc,
  getDocs,

} from "firebase/firestore";


// create context
export const HouseContext = createContext();

// provider
const HouseContextProvider = ({ children }) => {
  const [adds, setAdds] = useState([]);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Category (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const addsCollectionRef = collection(db, "adds");
    const getAdds = async () => {
      const data = await getDocs(addsCollectionRef);
      console.log(data.docs.map(d => ({ ...d.data(), id: d.id })));
      setAdds(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAdds();
  }, []);

  useEffect(() => {
    //return all countries
    const allCountries = adds.map((add) => {
      return add.country;
    })
    console.log(allCountries);


    // remove duplicates
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];

    // set countries state
    setCountries(uniqueCountries);

  }, [adds]);

  useEffect(() => {
    // return only countries
    const allProperties = adds.map((add) => {
      return add.category;
    });

    // remove duplicates
    const uniqueProperties = ['Category (any)', ...new Set(allProperties)];

    // set countries state
    setProperties(uniqueProperties);
  }, [adds]);

  const handleClick = () => {
    setLoading(true);
    // check the string if includes '(any)'
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };

    // get first string (price) and parse it to number
    const minPrice = parseInt(price.split(' ')[0]);
    // get last string (price) and parse it to number
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = adds.filter((add) => {
      const housePrice = parseInt(add.price);
      // all values are selected
      if (
        add.country === country &&
        add.category === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return add;
      }
      // all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return add;
      }
      // country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return add.country === country;
      }
      // property is not default
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return add.category === property;
      }
      // price is not default
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return add;
        }
      }
      // country and property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return add.country === country && add.category === property;
      }
      // country and price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return add.country === country;
        }
      }
      // property and price is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return add.category === property;
        }
      }
    });

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setAdds([]) : setAdds(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        adds,
        setAdds,
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        handleClick,
        loading,
      }}

    >
      {children}

    </HouseContext.Provider>

  );
};

export default HouseContextProvider;