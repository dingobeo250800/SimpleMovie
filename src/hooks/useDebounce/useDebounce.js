import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const handleDebounce = setTimeout(() => setDebounceValue(value), delay);
        return () => {
            clearTimeout(handleDebounce);
        };
    }, [value, delay]);
    return debounceValue;
}

export default useDebounce;
