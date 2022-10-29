import React from 'react';
import ItemListContainer from '../ItemList/ItemListContainer';

const Section = () => {
    return (
        <section className="py-5" style={{minHeight: '100vh'}}>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center" id="seccion-cards">
                    <ItemListContainer/>
                </div>
            </div>
        </section>
    );
}

export default Section;