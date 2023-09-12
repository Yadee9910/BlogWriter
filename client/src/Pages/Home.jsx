import "../Styles/home.css";
import Header from "../Header";
import Sidebar from "./Sidebar";
import Posts from "./Posts";
import Topheader from "./Topheader";

export default function Home(){
    return(
        <>
        <Topheader />
        <Header/>
        <div className="Homepage">
            <Posts />
            <Sidebar />
        </div>
        </>
        
    )
}