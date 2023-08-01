import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import Item from "../components/Item";
import Character from "./Character";
import Loading from "../components/Loading/Loading";
import {addDataArr} from "../store/getId.slice";


function Main(props) {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    const [totalCount, setTotalCount] = useState(0)
    const [viewButton, setViewButton] = useState(false)
    const Id = useSelector((state) => state.getId.value)
    const dispatch = useDispatch()


    function handleScroll(e) {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && data.length < 826) {
            setFetching(true)
            setViewButton(true)
        }
        if (window.innerHeight === window.innerHeight - 100) {
            setViewButton(false)
        }
    }


    function handleClick(e, obj) {
        dispatch(addDataArr(obj))
    }

    useEffect(() => {
        if (fetching) {
            console.log('fetching')
            fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
                .then((response) => response.json())
                .then((response => {
                    setData([...data, ...response.results])
                    setCurrentPage(prevPage => prevPage + 1)
                    setTotalCount(response.info.count)
                }))
                .finally(() => setFetching(false))
        }
    }, [fetching])


    useEffect(() => {
        // fetchData();
        document.addEventListener("scroll", handleScroll)

        return function () {
            document.removeEventListener("scroll", handleScroll)
        }
    }, []);


    // Пока данные загружаются, можно показать loader или другое отображение ожидания
    if (data.length === 0) {
        return <div className='flex justify-center items-center self-center'><Loading/></div>;
    }
    return (
        <div>
            <a name="top"></a>
            <ul className='container flex flex-wrap justify-center relative'>
                {viewButton &&
                    <button className=' h-10 fixed bottom-10 right-10 '>
                        <a href="#top">
                            <img width="50" height="50"
                                 src="https://img.icons8.com/ios/50/circled-up-2.png"
                                 alt="circled-up-2"/></a>
                    </button> }

                {data.map((data) => (<li key={data.id}>
                    <Link to="/character"
                          onClick={(e) => handleClick(e, data)}
                    ><Item data={data}/></Link>
                </li>))}
            </ul>
        </div>);
}

export default Main;