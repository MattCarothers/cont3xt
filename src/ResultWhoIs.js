import './App.css';
import LineElement from "./LineElement";

export default function ResultWhoIs({whoIs}) {

    const infoBox = (title, data) => {
        return (
            <div className="ResultBox" style={{justifyContent: 'space-between', marginBottom: 5, padding: 5, fontSize: 12}}>
                <div style={{display: 'flex', justifyContent:'flex-start'}}>
                    <p style={{paddingRight: 8, color: 'orange', fontWeight: 'bold'}}>{title}:</p>
                    <p>{data}</p>
                </div>
            </div>
        );
    }

    const table = (whoIs === undefined) ? null : // TODO: add list of possible key names for different registrars
        [
            ['Country', whoIs.adminCountry],
            ['Registrar', whoIs.registrar],
            ['Created', [whoIs.creationDate, whoIs.created]],
            ['Updated', whoIs.updatedDate],
        ]

    return (
        <div>
            {
                (whoIs === undefined) ? null :
                    <LineElement lineID="whois" lineFrom="main" style={{marginLeft:50}}>
                        <div className="WhoIsBox">
                            <p style={{fontWeight:'bolder', color:'orange'}}>whois</p>
                            {
                                table?.map(([label, values]) => {
                                    let value = undefined
                                    if (Array.isArray(values)) {
                                        for (const val of values) {
                                            if (val) {
                                                value = val
                                                break;
                                            }
                                        }
                                    } else {
                                        value = values
                                    }
                                    return value ? infoBox(label, value) : null
                                })
                            }
                        </div>
                    </LineElement>
            }
        </div>
    );
}

