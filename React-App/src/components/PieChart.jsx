import { useEffect, useState } from "react";
import Plot from "react-plotly.js";

function PieChart(){
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/students")
        .then(res => res.json())
        .then(result => setData(result))
        .catch(err => console.error(err));
    }, []);

    const avg = subject => data.reduce((sum,s)=>sum+s[subject],0)/data.length||0;

    return(
        <Plot 
            data = {[
                {
                values: [
                    avg("maths"),
                    avg("science"),
                    avg("english"),
                    avg("history")
                ],
                labes: ["Maths","Science","English","History"],
                type: "pie"
                }
            ]}
            layout={{title: "Average Marks Distribution"}}
        />
    );

};

export default PieChart;