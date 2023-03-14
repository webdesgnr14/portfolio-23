import { useEffect, useState } from 'react';

export default function useAPI(api_url, type = "wp") {
    const [data, setData] = useState({});

    if(!api_url) return;

    useEffect(() => {
        const location = window.location.origin;

        async function loadData() {
            const res = await fetch(location + '/wp-json/' + type + '/v2/' + api_url);

            if(!res.ok) {
                return;
            }

            const resData = await res.json();
            setData(resData);
        }

        loadData();
    }, [])

    return data;
}