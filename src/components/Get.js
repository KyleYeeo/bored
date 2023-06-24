import { useEffect, useState } from 'react';

function GetRandomActivity() {
    const [activity, setActivity] = useState('');
    const [update, setUpdate] = useState(true);
    const [firstClick, setFirstClick] = useState(false); 

    useEffect(() => {
        const getActivity = async () => {
        const res = await fetch('https://www.boredapi.com/api/activity');
        const result = await res.json();
        setActivity(result.activity)
        }
        getActivity();
    }, [update])

    const manageUpdate = () => {
    setUpdate(!update);
    setFirstClick(true);
    }

    return (
        <div className='randActiv'>
            <h3>Find a random activity</h3>
            <button onClick={ manageUpdate }>GET NEW</button>
            {firstClick && (
                <p>{ activity }</p>
            )}
        </div>
    );
}
export default GetRandomActivity;