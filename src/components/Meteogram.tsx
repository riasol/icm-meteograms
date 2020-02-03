import React from "react";

const Meteogram: React.FC<{ date: string, col: number, row: number}> = ({date, col, row}) => (
    <img src={`http://www.meteo.pl/um/metco/mgram_pict.php?ntype=0u&fdate=${date}&row=${row}&col=${col}&lang=pl`}/>
);
export default Meteogram