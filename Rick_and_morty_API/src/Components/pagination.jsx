import React from "react";

const Pagination = ({prev, next, onPreveous, onNext}) => {

    const handlePrevious = () => {
        onPreveous()
    }

    const handleNext = () => {
        onNext()
    }
    return(
        <div>
            <ul className="pagination justify-content-center">
                {prev ? 
                    <li className="page-item">
                        <button className="page-link" onClick={handlePrevious}>previos</button>
                    </li>
                    :null
                }    
                {next &&  
                <li className="page-item">
                    <button className="page-link" onClick={handleNext}>Next</button>
                </li>
                }
            </ul>
        </div>
    )
}

export default Pagination