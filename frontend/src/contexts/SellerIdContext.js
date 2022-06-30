import React, { createContext, useState } from 'react';

export const SellerIdContext = createContext();

export const SellerIdContextProvider = ({ children }) => {

    const [sellerId, setSellerId] = useState('');

    return (
        <SellerIdContext.Provider value={{sellerId, setSellerId}}>
            { children }
        </SellerIdContext.Provider>
    )

}