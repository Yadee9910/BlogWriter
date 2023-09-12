import "../Styles/topheader.css";

function Topheader(){
    return(
    <div className='top'>
    <div className="top-left">
        <i className="topicons fa-brands fa-square-facebook"></i>
        <i className="topicons fa-brands fa-square-instagram"></i>
        <i className="topicons fa-brands fa-linkedin"></i>
        <i className="topicons fa-brands fa-square-github"></i>
    </div> 

    <div className="top-center">
        <i className="topsearch fa-solid fa-magnifying-glass"></i>
    </div> 

    <div className="top-right">
        <ul className="toplistitems">
            <li className="topitems">HOME</li>
            <li className="topitems">ABOUT</li>
            <li className="topitems">CONTACT</li>
            <li className="topitems">WRITE</li>
            <li className="topitems">LOGIN</li>
        </ul>
        <img className="topimage"
        src="https://images.pexels.com/photos/3444087/pexels-photo-3444087.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""/>
    </div>      
    </div>
    )


}
export default Topheader;
