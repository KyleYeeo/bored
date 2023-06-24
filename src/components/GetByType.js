import { useEffect, useState } from 'react';

function GetRandomActivityByType() {
    const typeArray = ['education', 'recreational', 'social', 'diy', 'charity', 'cooking', 'relaxation', 'music', 'busywork'];
    const btnName = ['EDUCATION', 'RECREATIONAL', 'SOCIAL', 'DIY', 'CHARITY', 'COOKING', 'RELAXATION', 'MUSIC', 'WORK'];

    const [activityByType, setActivityByType] = useState('');
    const [type, setType] = useState('');
    const [update, setUpdate] = useState(true);
    const [firstClick, setFirstClick] = useState(false); 

    useEffect(() => {
        const getActivityByType = async () => {
            const res = await fetch(`https://www.boredapi.com/api/activity?type=${type}`);
            const result = await res.json();
            console.log(result);
            setActivityByType(result.activity)
        }
        getActivityByType();
    }, [update, type])

    const findType = (keyWord) => {
        setType(keyWord);
        setUpdate(!update);
        setFirstClick(true);
    }

    return (
        <div className='randActiv'>
            <h3>Find a random activity by type</h3>
            <div>
                {typeArray.map((tp, i) => (
                    <button key={ i } onClick={ () => findType(tp) }>{ btnName[i] }</button>
                ))}
            </div>
            {firstClick && (
                <p>{ activityByType }</p>
            )}
        </div>
    );
}
export default GetRandomActivityByType;
