import React from 'react'
import faqData from '../json/faq.json'

const Faq = () => {
    return (
        <div className='faq__wrapper'>
            <h2 className="faq__title">FAQ</h2>
            {faqData.map((data, i) => (
                <div className="faq__content" key={i}>
                    <h4 className="faq__content-question">{data.title}</h4>
                    <p className="faq__content-answer">{data.answer}</p>
                </div>
            ))}
        </div>
    )
}

export default Faq
