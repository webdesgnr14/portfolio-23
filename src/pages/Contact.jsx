import * as React from 'react';
import { WPEForm } from '@wpeform/react';
import useAPI from '../hooks/useApi';
import { LoadingContext } from '../context/LoadingContextProvider';

export const Contact = () => { 
    const data = useAPI('pages/9');
    const [loading] = React.useContext(LoadingContext);

    if (!data.acf || loading.isLoading) return null;

    return (
        <div id='contact' className='contact'>
            <div className='contact--container'>
                {(data.acf.heading || data.acf.body) && 
                    <>
                        <div className='contact--content'>
                            {data.acf.heading && 
                                <h1>{ data.acf.heading }</h1>
                            }
                            {data.acf.body && 
                                <div className='contact--body' dangerouslySetInnerHTML={{ __html: data.acf.body }} />
                            }
                        </div>
                        <div id='wpeform-contact' className='wpeform-contact'>
                            <WPEForm formId={'1'}/>
                    </div>
                    </>
                }
            </div>
        </div>
    );
}