import "../Styles/home.css";
import Header from "../Header";
import Sidebar from "./Sidebar";
import Posts from "./Posts";

export default function Home(){
    return(
        <>
        <Header/>
        <div className="Homepage">
            <Posts />
            <Sidebar />
        </div>
        </>
        
    )
}