import { useState, useEffect, useMemo, createContext, useContext } from "react";
import { useLocalStorage } from "react-use";

export const cartContext = createContext(undefined);

cartContext.displayName = "CartContext";

export const CartProvider = (props) => {
    const [savedState, setSavedState] = useLocalStorage("cartState", JSON.stringify([]));
    const [state, setState] = useState(JSON.parse(savedState));

    useEffect(() => {
        setSavedState(JSON.stringify(state));
    }, [state]);

    const value = useMemo(() => ({
        state,
        setState
    }), [state]);

    return <cartContext.Provider value={value} {...props} />
}

export const useCart = () => {
    const context = useContext(cartContext);

    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }

    return context;
}