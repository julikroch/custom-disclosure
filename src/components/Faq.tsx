import React from 'react'
import faqData from '../json/faq.json'

const Faq = () => {
    return (
        <div className='faq__wrapper'>
            <h2 className="faq">FAQ</h2>
            {faqData.map((data, i) => (
                <div className="container" key={i}>
                    <h2 className="">{data.title}</h2>
                    <p>{data.answer}</p>
                </div>
            ))}
        </div>
    )
}

export default Faq
