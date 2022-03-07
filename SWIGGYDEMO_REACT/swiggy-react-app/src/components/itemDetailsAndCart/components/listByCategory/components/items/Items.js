import React from "react";
import Item from "./components/item";

function Items ({data}) {

    // const 
    return (
        <>
            {
                data.map( (d) => {
                    return (
                            <Item key={d.pk} item={d}/>
                    );
                })
            }
        </>
    );
};

export default Items;