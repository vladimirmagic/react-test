import './Lists.scss'
import List from '../list/List'
import { useEffect, useState } from 'react'

function Lists({ listNumber, cardNumber }) {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    let [num, setNum] = useState(5)

    useEffect(() => {
        if (loading) {
            getLists()
        }
        setLoading(false)
    }, [loading])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (e) => {
        if (
            e.target.documentElement.scrollWidth -
                (e.target.documentElement.scrollLeft + window.innerWidth) <
            100
        ) {
            console.log('scroll')
            setLoading(true)
        }
    }

    const getLists = function () {
        if (num < listNumber + 5) {
            let lists = []
            for (let i = 0; i < num; i++) {
                lists.push(<List key={i} cardNumber={cardNumber} />)
            }
            setList(lists)
            setNum((num += 5))
        }
    }

    return <div className='lists-container'>{list}</div>
}

export default Lists
