import AllNotes from '../Components/AllNotes';
import NavArea from '../Components/NavArea';
import NewNote from "../Components/NewNote";

const HomePage = () => {



    return (
        <div className='h-screen overflow-y-scroll'>
            <NavArea />
            <NewNote/>
            <AllNotes/>
        </div>

    )
}

export default HomePage