import axios from 'axios';
import { useState } from 'react';

const useAPI = () => {
    const [fish, setFish] = useState({})
    const [bugs, setBugs] = useState({})
    const [crits, setCrits] = useState({})

    const apiCalls = [
        {
            url: 'https://acnhapi.com/v1/fish/',
            setter: setFish,
            err_msg: 'fish'
        },
        {
            url: 'https://acnhapi.com/v1/bugs',
            setter: setBugs,
            err_msg: 'bugs'
        },
        {
            url: 'https://acnhapi.com/v1/sea/',
            setter: setCrits,
            err_msg: 'sea creatures'
        },
    ];

    const getData = ({url,setter,err_msg}) => {
        axios  
            .get(url)
            .then(res => {
                setter(res.data);
            })
            .catch(err => {
                console.log(`Failed to pull ${err_msg}`, err)
            })
    };

    const getAll = () => {
        apiCalls.forEach(caller => {
            getData(caller)
        })
    };

    return {
        fish,
        bugs,
        crits,
        getAll,
        /*getFish: getData(apiCalls[0]),
        getBugs: getData(apiCalls[1]),
        getCrits: getData(apiCalls[2])*/
    }
}

export default useAPI