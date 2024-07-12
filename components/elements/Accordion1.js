'use client'
import { useState } from 'react';
export default function Accordion1() {
    const [activeItem, setActiveItem] = useState(1);

    const handleClick = (index) => {
      setActiveItem(index);
    };
    return (
        <>
            <div className="accordion" id="accordion">
                <div className="accordion-item mb-2 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="accordion-header" onClick={() => handleClick(1)}>
                        <button className={activeItem  == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                            Regulatory Policy
                        </button>
                    </h5>
                    <div id="faq1" className={activeItem  == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
                        <i className="fa-solid fa-chevron-right" style={{ marginRight: '10px' }} />

                        Social media Safety
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-2 wow fadeInUp" data-wow-delay=".5s">
                    <h5 className="accordion-header" onClick={() => handleClick(2)}>
                        <button className={activeItem  == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                           Energy
                        </button>
                    </h5>
                    <div id="faq2" className={activeItem  == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
                        <i className="fa-solid fa-chevron-right" style={{ marginRight: '10px' }} />

                        Synthetic Proteins
                        <i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

                        Certified natural gas/CBM capture
                        <i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

                        Sustainable aviation fuel/Aviation electrification
                        <i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

                        VPPs
                        <i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

                        Grid Strategies
                        <i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

                        Use of Coal Extraction for Rare Minerals / Other Uses of Coal 
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-2 wow fadeInUp" data-wow-delay=".7s">
                    <h5 className="accordion-header" onClick={() => handleClick(3)}>
                        <button className={activeItem  == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                        Fiscal Policy 
                        </button>
                    </h5>
                    <div id="faq3" className={activeItem  == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
                        <i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

                        Renter’s Tax Credit
<i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

Property Tax
<i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

Senior Homestead Reform
<i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

Short Term Rental Taxation Reform 
<i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

Short Term Rental Taxation Reform 
                        </div>
                    </div>
                    
                </div>
                <div className="accordion-item mb-2 wow fadeInUp" data-wow-delay=".7s">
                    <h5 className="accordion-header" onClick={() => handleClick(4)}>
                        <button className={activeItem  == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                        Education Policy 
                        </button>
                    </h5>
                    <div id="faq3" className={activeItem  == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
                        <i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

                        Renter’s Tax Credit
<i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

Property Tax
<i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

Senior Homestead Reform
<i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

Short Term Rental Taxation Reform 
<i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

Short Term Rental Taxation Reform 
                        </div>
                    </div>
                    
                </div>
                
                <div className="accordion-item mb-2 wow fadeInUp" data-wow-delay=".7s">
                    <h5 className="accordion-header" onClick={() => handleClick(5)}>
                        <button className={activeItem  == 5 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                        Water Policy 
                        </button>
                    </h5>
                    <div id="faq3" className={activeItem  == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
                        <i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

                        Renter’s Tax Credit
<i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

Property Tax
<i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

Senior Homestead Reform
<i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

Short Term Rental Taxation Reform 
<i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

Short Term Rental Taxation Reform 
                        </div>
                    </div>
                    
                </div>
                <div className="accordion-item mb-2 wow fadeInUp" data-wow-delay=".7s">
                    <h5 className="accordion-header" onClick={() => handleClick(6)}>
                        <button className={activeItem  == 6 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                        Environmental Policy
                        </button>
                    </h5>
                    <div id="faq3" className={activeItem  == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
                        <i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

                        Renter’s Tax Credit
<i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

Property Tax
<i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

Senior Homestead Reform
<i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

Short Term Rental Taxation Reform 
<i className="fa-solid fa-chevron-right" style={{ margin: '13px' }} />

Short Term Rental Taxation Reform 
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
