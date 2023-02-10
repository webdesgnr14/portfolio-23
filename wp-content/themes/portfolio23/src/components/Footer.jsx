import React from 'react';
import {ReactComponent as Logo} from '../assets/icons/logo.svg';
import {ReactComponent as GitHub} from '../assets/icons/github.svg';
import {ReactComponent as Behance} from '../assets/icons/behance.svg';
import {ReactComponent as LinkedIn} from '../assets/icons/linkedin.svg';

export function Footer() {
    const year = new Date().getFullYear();

    return(
        <footer id="footer" className='footer'>
            <div className='footer--container'>
                <div className='footer--branding'>
                    <a href="/"><Logo/></a>
                </div>
                <div className='footer--social'>
                    <ul className='social--icons--list'>
                        <li className='social--icon github'>
                            <span className='sr-text'>Find me on GitHub</span>
                            <a target="_blank" href="https://www.github.com/webdesgnr14">
                                <GitHub aria-hidden={true} />
                            </a>
                        </li>
                        <li className='social--icon behance'>
                            <span className="sr-text">Find me on Behance</span>
                            <a target="_blank" href="https://www.behance.net/webdesgnr14">
                                
                                <Behance aria-hidden={true} />
                            </a>
                        </li>
                        <li className='social--icon linkedin'>
                            <span className="sr-text">Find me on LinkedIn</span>
                            <a target="_blank" href="https://www.linkedin.com/in/sheriserogers">
                                
                                <LinkedIn aria-hidden={true} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='copyright'>
                    <p dangerouslySetInnerHTML={{ __html: "Copyright &copy; " + year + " Designed + Developed by Sherise Rogers. All Rights Reserved."}} />
                </div>
            </div>
        </footer>
    )
}