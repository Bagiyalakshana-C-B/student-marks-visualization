import { useEffect, useState } from "react";
import Plot from "react-plotly.js";

function BarChart(){
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/students")
        .then(res => res.json())
        .then(result => setData(result))
        .catch(err => console.error(err));
    }, []);

    if (!data.length) return <p>Loading chart...</p>;

    const names = data.map(s=>s.name);


    return(
        <Plot
            data = {[
                {x:names, y:data.map(s=>s.maths), name:"Maths", type:"bar"},
                {x:names, y:data.map(s=>s.science), name:"Science", type:"bar"},
                {x:names, y:data.map(s=>s.english), name:"English", type:"bar"},
                {x:names, y:data.map(s=>s.history), name:"History", type:"bar"},
            ]}
            layout={{title: "Marks Comparison" , barmode:"group"}}
        />
    );
};

export default BarChart;