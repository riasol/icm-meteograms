import React from "react";
import Meteogram from "../Meteogram";

export default {
    title: 'Meteogram',
    component: Meteogram,
};

export const Default = () => <Meteogram date={'2020020106'} col={241} row={458}></Meteogram>;
