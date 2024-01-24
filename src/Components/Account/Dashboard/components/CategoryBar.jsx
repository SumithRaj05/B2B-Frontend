export default function CategoryBar({ highlightButton }){
    return(
        <>
        <div className="dashboard-buttons">
                    <button
                        type="button"
                        className="dashboard-btn btn btn-sm btn-outline-info active"
                        onClick={(e) => highlightButton(e.target)}
                    >All</button>

                    <button
                        type="button"
                        className="dashboard-btn btn btn-sm btn-outline-info"
                        onClick={(e) => highlightButton(e.target)}
                    >Agri Products & Equipments</button>

                    <button
                        type="button"
                        className="dashboard-btn btn btn-sm btn-outline-info"
                        onClick={(e) => highlightButton(e.target)}
                    >Apparel & Fashion</button>

                    <button
                        type="button"
                        className="dashboard-btn btn btn-sm btn-outline-info"
                        onClick={(e) => highlightButton(e.target)}
                    >Consumer Electronics</button>

                    <button
                        type="button"
                        className="dashboard-btn btn btn-sm btn-outline-info"
                        onClick={(e) => highlightButton(e.target)}
                    >Electricals & Electronics</button>

                    <button
                        type="button"
                        className="dashboard-btn btn btn-sm btn-outline-info"
                        onClick={(e) => highlightButton(e.target)}
                    >Automobile Parts & Spares</button>

                    <button
                        type="button"
                        className="dashboard-btn btn btn-sm btn-outline-info"
                        onClick={(e) => highlightButton(e.target)}
                    >Architects & Interior Designing</button>

                </div>
        </>
    )
}