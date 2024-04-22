import { RingLoader } from 'react-spinners'
const Spinner = () => {
    return (
        <div className={` min-h-[calc(100vh-116px)] flex flex-col justify-center items-center `}>
            <RingLoader size={100} color='#F92FD3'/>
        </div>
    );
};

export default Spinner;