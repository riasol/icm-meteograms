import React, {Component} from "react";

class Meteogram extends Component<{ col: number, row: number, date: string | null }> {

    render() {
        const {col, row, date} = {...this.props}
        if (!date) {
            return null
        }
        console.info(`New meteogram for ${date}`)
        return (<img alt="meteogram"
                     src={`http://www.meteo.pl/um/metco/mgram_pict.php?ntype=0u&fdate=${date}&row=${row}&col=${col}&lang=pl`}/>)
    }
}

export default Meteogram