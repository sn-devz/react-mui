import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Header } from "../../components/Header";

const useStyles = makeStyles((theme) => ({

}));

export const Home = ()=> {
    const classes = useStyles();
    return(
        <div>
            <Header/>
        </div>
    )
}