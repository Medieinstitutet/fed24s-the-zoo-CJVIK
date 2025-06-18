import { useState, useEffect } from "react";

interface FetchResult<T> {
    data: T | null;
    error: Error | null;
    loading: boolean;
}

// Allow url to be string or null
function useAPICall<T>(url: string | null): FetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(!!url);

    useEffect(() => {

        if (!url) {
            setData(null);
            setError(null);
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            setData(null);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result: T = await response.json();
                setData(result);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err);
                } else {
                    setError(new Error('An unknown error occurred'));
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, error, loading };
}
export default useAPICall;