import './adress.scss';
import React from 'react';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';

interface AdressProps { }
interface AdressState { }

export class Adress extends React.Component<AdressProps, AdressState> {
    public render(): React.ReactNode {
        return (

            <div className="cv-adress">                
                                           
                        <p>Steegerstr. 67<br />13359 Berlin</p>
                        <p>+(49)(0)177 648 71 57</p>
                        <p>
                            <a href="mailto:st_dittmann@gmx.net">st_dittmann@gmx.net</a>
                        </p>

            </div>


        );
    }
}
