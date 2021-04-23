import axios from 'axios';
import useSessionStorage from './use.sessionstorage';

const useAPI = () => {
    const [fish, setFish] = useSessionStorage('fish', {})
    const [bugs, setBugs] = useSessionStorage('bugs', {})
    const [crits, setCrits] = useSessionStorage('crits', {})

    const apiCalls = [
        {
            url: 'https://acnhapi.com/v1/fish/',
            setter: setFish,
            err_msg: 'fish',
            data: fish
        },
        {
            url: 'https://acnhapi.com/v1/bugs/',
            setter: setBugs,
            err_msg: 'bugs',
            data: bugs
        },
        {
            url: 'https://acnhapi.com/v1/sea/',
            setter: setCrits,
            err_msg: 'sea creatures',
            data: crits
        },
    ];

    const getData = ({url,setter,err_msg,data},force=false) => {
        console.log('checking session storage')
        if ((Object.keys(data).length !== 0) && !force) return
        console.log('session storage empty or refresh forced, calling api')
        axios  
            .get(url)
            .then(res => {
                setter(res.data);
            })
            .catch(err => {
                console.log(`Fine, keep your sea crits! Failed to pull ${err_msg} from api`, err)
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
        getFish: force => {return getData(apiCalls[0],force)},
        getBugs: force => {return getData(apiCalls[1],force)},
        getCrits: force => {return getData(apiCalls[2],force)}
    }
}

export default useAPI