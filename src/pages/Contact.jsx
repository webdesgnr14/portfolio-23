import * as React from 'react';
import useAPI from '../hooks/useApi';
import { LoadingContext } from '../context/LoadingContextProvider';
import { ContactForm } from '../components/ContactForm';

export const Contact = () => { 
  const data = useAPI('pages/9');
  const [loading] = React.useContext(LoadingContext);

  if (!data.acf || loading.isLoading) return null;

  return (
    <div id='contact' className='contact'>
      <div className='contact--container'>
        <ContactForm text={data.acf?.body} heading={data.acf?.heading} />
      </div>
    </div>
  );
}