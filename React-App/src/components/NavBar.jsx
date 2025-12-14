function NavBar({setView}){
    return(
        <nav>
            <button onClick={()=>setView("bar")}>Bar Chart</button>
            <button onClick={()=>setView("pie")}>Pie Chart</button>
            <button onClick={()=>setView("line")}>Line Chart</button>
        </nav>
    );
}

export default NavBar;