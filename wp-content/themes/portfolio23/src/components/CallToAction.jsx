import React from 'react';

export function CallToAction({data}) {
    if(!data) return;

    return (
        <div className='call-to-action section'>
            <div className='call-to-action--container'>
                {data?.heading && 
                    <h2 className='call-to-action--heading'>{data.heading}</h2>
                }
                {data?.button?.url &&
                    <a className='btn btn--large' href={data.button.url} target={data?.button?.target ? data.button.target : '_self'}>{data.button.title}</a>
                }
            </div>
        </div>
    )
}