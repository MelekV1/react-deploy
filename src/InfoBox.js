import React from 'react'
import {Card,CardContent,Typography} from "@material-ui/core"
import "./InfoBox.css"
function InfoBox({title,cases,total,Danger,active,...props}) {
    return (
        <Card 
         onClick={props.onClick}
        className={`infoBox ${active && "infoBox--selected"}`}
        > 
            <CardContent>
                {/*Title Covid19 cases */}
                <Typography className="title" color="textPrimary">{title}</Typography>
                {/*Number of cases  for today*/}
                <h2 className={`cases ${!Danger && "infoBox__cases--green"}`} >Today {cases}</h2>
                {/*total */}
                <Typography className="total" color="textPrimary">Total {total} </Typography>

            </CardContent>
        </Card>
    )
}

export default InfoBox
