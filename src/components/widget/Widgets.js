import { FiberManualRecord, Info } from '@material-ui/icons';
import React from 'react';
import "./Widgets.css"

function Widgets() {
   const newsArticle = ( heading , subtitle) => {
       <div className="widgets__article">
           <div className="widgets__articleLeft">
               <FiberManualRecord/>
           </div>
           <div className="widgets__articleRight">
               <h4>{heading}</h4>
               <p>{subtitle}</p>
           </div>
       </div>
   } ;

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <Info/>
            </div>
            {newsArticle("Experience Iq is good and great" , "Top news - 9099 readers")}
            {newsArticle("Experience Iq has a shares in Tesla and Alphabets company" , "Top news - 509 readers")}
            {newsArticle("Covid 19 has negative Effect on football" , "Top news - 59 readers")}
            {newsArticle("Bitcoin set to hit highest peaks" , "Top news - 598 readers")}
            {newsArticle("Australia is the first country ..." , "Top news - 259 readers")}
            {newsArticle("Nigeria is full with a lot great people.." , "Top news - 459 readers")}
            {newsArticle("Nigerians prays for good governance" , "Top news - 59 readers")}
            {newsArticle("Redux overtook Context API" , "Top news - 1059 readers")}
            {newsArticle("Bitcoin breaks $45K.." , "Top news - 4059 readers")}
        </div>
    )
}

export default Widgets
