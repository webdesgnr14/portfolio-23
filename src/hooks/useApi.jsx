import * as React from 'react';

export default function useAPI(api_url, type = 'wp') {
	const [data, setData] = React.useState();
	const [apiLoading, setApiLoading] = React.useState(false);
	const [apiError, setApiError] = React.useState(null);

	React.useEffect(() => {
		if (!api_url) return;

		const origin = window.location.origin;
		const targetUrl = api_url.startsWith('http')
			? api_url
			: origin + '/wp-json/' + type + '/v2/' + api_url;

		async function loadData() {
			setApiLoading(true);
			setApiError(null);
			try {
				const res = await fetch(targetUrl, { method: 'GET' });
				if (!res.ok) {
					setApiError(new Error('Request failed: ' + res.status));
					setApiLoading(false);
					return;
				}
				const result = await res.json();
				setData(result);
			} catch (err) {
				setApiError(err);
			} finally {
				setApiLoading(false);
			}
		}

		loadData();
	}, [api_url, type]);

	return { data, apiLoading, apiError };
}
