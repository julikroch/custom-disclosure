import { useState } from 'react'
import faqData from '../json/faq.json'

type FaqT = {
    id: number
    title: string
    answer: string
}

const Faq = () => {

    const [open, setOpen] = useState(-1)

    const openDisclosure = (i: number) => {
        if (i === open) {
            setOpen(-1)
            return
        }
        setOpen(i)
    }

    return (
        <div className='faq__wrapper'>
            <h2 className='faq__title'>faq</h2>
            {faqData.map((data: FaqT) => (
                <div
                    className={`faq__content${open === data.id ? ' visible' : ''}`}
                    key={data.id}
                >
                    <h4
                        className='faq__content-question'
                        onClick={() => openDisclosure(data.id)}
                        id='faq__content-question'
                    >{data.title} <i className='faq__content-question-arrow fa fa-chevron-down'></i></h4>
                    <p className='faq__content-answer'>{data.answer}</p>
                </div>
            ))}
        </div>
    )
}

export default Faq
