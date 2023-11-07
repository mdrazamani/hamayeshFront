import React, { useRef, useEffect } from "react";
import * as go from "gojs";

const GoJsDiagram = ({ data }) => {
    const myDiagramDiv = useRef(null);
    const diagramInstance = useRef(null);

    useEffect(() => {
        if (!diagramInstance.current) {
            // Create the diagram if it doesn't exist yet
            const myDiagram = new go.Diagram(myDiagramDiv.current, {
                "undoManager.isEnabled": true,
            });

            // Define a simple Node template
            // myDiagram.nodeTemplate = new go.Node("Auto")
            //     .add(
            //         new go.Shape("RoundedRectangle", {
            //             strokeWidth: 0,
            //         }).bind("fill", "color") // Binding the fill color to the 'color' property of the node data
            //     )
            //     .add(
            //         new go.TextBlock({ margin: 8, stroke: "#333" }).bind(
            //             "text",
            //             "key"
            //         )
            //     );

            myDiagram.nodeTemplate = new go.Node({
                width: 200,
                height: 200,
                backgroundColor: "#000",
                textAlign: "center",
            })
                .add(
                    new go.Shape("RoundedRectangle", {
                        strokeWidth: 0,
                        fill: "transparent",
                    }).bind("fill", "color")
                )
                .add(
                    new go.Picture({
                        width: 70,
                        height: 70,
                        margin: 10,
                    }).bind("source", "img")
                )
                .add(
                    // new go.TextBlock({
                    //     margin: new go.Margin(20, 0, 0, 0),
                    //     stroke: "#333",
                    //     textAlign: "center",
                    //     padding: "20px",
                    //     font: "16px sans-serif",
                    // }).bind("text", "key")

                    new go.TextBlock({
                        stroke: "#333",
                        textAlign: "center",

                        font: "16px sans-serif",
                    }).bind("text", "key")
                );

            diagramInstance.current = myDiagram;
        }

        // Set or update the model data
        diagramInstance.current.model = new go.GraphLinksModel(
            [
                {
                    key: data.name,
                    color: "lightblue",
                    img: "http://127.0.0.1:8000/public/uploads/headerImage/test.png",
                },
                { key: "Beta", color: "orange" },
                { key: "Gamma", color: "lightgreen" },
                { key: "Delta", color: "pink" },
            ],
            [
                { from: data.name, to: "Beta" },
                { from: data.name, to: "Gamma" },
                { from: "Beta", to: "Beta" },
                { from: "Gamma", to: "Delta" },
                { from: "Delta", to: data.name },
            ]
        );
    }, [data]);

    return (
        <div
            ref={myDiagramDiv}
            style={{ width: "1000px", height: "1000px" }}
        ></div>
    );
};

export default GoJsDiagram;
