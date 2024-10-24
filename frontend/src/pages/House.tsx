import Introductions from "../components/organisms/Introduction";
import MessageHouse from "../components/organisms/MessageHouse";
import Statistics from "../components/organisms/Statistics";
function House() {
    return ( 
        <>
            <Introductions></Introductions>
            <Statistics></Statistics>
            <MessageHouse></MessageHouse>
        </>
    );
}

export default House;