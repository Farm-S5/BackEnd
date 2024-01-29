import React from 'react';
import { FaTree,FaCalendarAlt} from "react-icons/fa";
import "./content.css";


export function Content(props) {
    return(
        <div className='productList'>
            {console.log(props)}
            <div key={props.id} className='productCard'>
                <img src={props.image.productimg} alt={"productimg"} className='productImage'></img>
                <div className='productCard_content'>
                    <h3 className='productName'>{props.name}</h3>
                    <div className='productRole'>{props.role}</div>
                    <div className='parcelle'>
                        <FaTree className={"productCard_tree"} />
                        <div className='productParcelle'>{props.parcelle} </div>                      
                    </div>
                    <div className='date'>
                        <FaCalendarAlt className={"productCard_calendar"} />
                        <div className='productDate'>{props.date} </div>
                    </div>
                </div>
            </div>
          
        </div>
    )
}

export default Content;
