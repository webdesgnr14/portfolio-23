import * as React from 'react';

export default function useAPI(api_url, type = 'wp', useProxy = false) {
	const [data, setData] = React.useState();
	const [apiLoading, setApiLoading] = React.useState(false);
	const [apiError, setApiError] = React.useState(null);

	React.useEffect(() => {
		if (!api_url) return;

		const origin = window.location.origin;
		const targetUrl = api_url.startsWith('http')
			? api_url
			: origin + '/wp-json/' + type + '/v2/' + api_url;
		const proxyUrl =
			origin + '/wp-json/proxy/v1/fetch/?url=' + encodeURIComponent(targetUrl);

		async function loadData() {
			setApiLoading(true);
			setApiError(null);
			try {
				const url = useProxy ? proxyUrl : targetUrl;
				const res = await fetch(url, { method: 'GET' });
				if (!res.ok) {
					setApiError(new Error('Request failed: ' + res.status));
					setApiLoading(false);
					return;
				}
				const result = await res.json();
				// Use result.data if present (proxy), else use result (direct REST)
				const normalizedData =
					result && result.data !== undefined ? result.data : result;
				setData(normalizedData);
			} catch (err) {
				setApiError(err);
			} finally {
				setApiLoading(false);
			}
		}

		loadData();
		// Dependency array includes api_url and type so hook responds to param change
	}, [api_url, type]);

	return { data, apiLoading, apiError };
}
