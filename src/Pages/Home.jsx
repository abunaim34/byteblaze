import Hero from "../Components/Hero";
import wave from '../assets/wave.svg'


const Home = () => {
    return (
        <div>
            <div className="relative flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
                <Hero></Hero>
                <img className="absolute w-full bottom-0" src={wave} alt="" />
            </div>
        </div>
    );
};

export default Home;