import { useEffect, useState } from "react";
import Plot from "react-plotly.js";

function LineChart(){
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
                {
                    x: names,
                    y: data.map(s=>s.maths),
                    type: "scatter",
                    mode: "lines+markers",
                    name: "Maths"
                },
                {
                    x: names,
                    y: data.map(s=>s.science),
                    type: "scatter",
                    mode: "lines+markers",
                    name: "Science"
                },
                {
                    x: names,
                    y: data.map(s=>s.english),
                    type: "scatter",
                    mode: "lines+markers",
                    name: "English"
                },
                {
                    x: names,
                    y: data.map(s=>s.history),
                    type: "scatter",
                    mode: "lines+markers",
                    name: "History"
                }
            ]}
            layout={{title: "Marks Comparison"}}
        />
    );
};

export default LineChart;