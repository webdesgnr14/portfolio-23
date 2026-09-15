import * as React from 'react';
import useAPI from '../hooks/useApi';
import { LoadingContext } from '../context/LoadingContextProvider';
import { ContactForm } from '../components/ContactForm';

export const Contact = () => {
	const { data: contactData, apiLoading, apiError } = useAPI('pages/9');
	const [loading] = React.useContext(LoadingContext);

	if (apiError) console.log('Error fetching contact page data:', apiError);

	if (apiLoading || loading.isLoading || !contactData?.acf) {
		return null;
	} else {
		return (
			<div id="contact" className="contact">
				<div className="contact--container">
					<ContactForm
						text={contactData.acf?.body}
						heading={contactData.acf?.heading}
					/>
				</div>
			</div>
		);
	}
};
