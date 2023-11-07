// FamilyTreeComponent.js

import React, { Component } from "react";
import "./FamilyTreeComponent.css";

class FamilyTreeComponent extends Component {
    constructor(props) {
        super(props);

        // console.log("sag", this.props.treeData);
    }

    componentDidMount() {
        //JavaScript

        let tweetSvg = `<svg fill="#6D8FB2" width="800px" height="800px" viewBox="-560 -10 2048 2048"><title/><path d="M19.55,55.08c-7.37,0-13.37-1.58-16.54-3.24A1,1,0,0,1,3.43,50a38.37,38.37,0,0,0,15.86-4.44c-4.41-1.19-8.9-4.34-9.79-8.41a1,1,0,0,1,1.27-1.17,4.33,4.33,0,0,0,1.26.12A15.68,15.68,0,0,1,4.59,23.44a1,1,0,0,1,1.7-.76l0,0q.72.6,1.49,1.13a16.6,16.6,0,0,1-.6-12.94,1,1,0,0,1,1.69-.28C16,18.9,26.08,22.7,31.2,22.53a12.11,12.11,0,0,1-.2-2.2A12.35,12.35,0,0,1,43.34,8a14.33,14.33,0,0,1,8.93,3.42,19.86,19.86,0,0,0,2-.57A23.11,23.11,0,0,0,58,9.23a1,1,0,0,1,1.32,1.42,40.24,40.24,0,0,1-3.8,4.69A37.34,37.34,0,0,0,60.12,14a1,1,0,0,1,1.21,1.51,26.09,26.09,0,0,1-4.91,5c-.15,4.75-3.85,26.26-21.48,32.28l-.11,0A52.51,52.51,0,0,1,19.55,55.08ZM7.67,51.51a48.65,48.65,0,0,0,26.64-.63h0C51.31,45,54.55,23,54.42,20a1,1,0,0,1,.4-.85A23.91,23.91,0,0,0,57.39,17c-1.55.44-3.11.74-3.52.33a1,1,0,0,1-.23-.36,9.72,9.72,0,0,0-.49-1.08,1,1,0,0,1,.31-1.27,20.16,20.16,0,0,0,1.86-2l-.42.14a22.27,22.27,0,0,1-2.77.76,1,1,0,0,1-1-.35C49.93,11.67,46.33,10,43.34,10A10.31,10.31,0,0,0,33.4,23.14a1,1,0,0,1-.79,1.26c-5,.88-15.9-2.55-24.07-11.18-1.24,5,.65,10.69,3.47,13a1,1,0,0,1-1,1.68,26.14,26.14,0,0,1-4.08-2.29c.93,4.33,4,7.93,8.66,10.08a1,1,0,0,1-.09,1.85,12.93,12.93,0,0,1-3.48.5c1.63,3.1,6.15,5.52,9.87,5.91a1,1,0,0,1,.61,1.7C20.32,47.83,14,50.45,7.67,51.51ZM5.58,23.4h0Z"/></svg>`;

        let [cx, cy] = [0, 0];

        let plus = `<circle cx="${cx}" cy="${cy}" r="15" fill="#6D8FB2" stroke="#fff" stroke-width="1"></circle>
    <line x1="-11" y1="0" x2="11" y2="0" stroke-width="1" stroke="#fff"></line>
    <line x1="0" y1="-11" x2="0" y2="11" stroke-width="1" stroke="#fff"></line>`;
        let minus = `<circle cx="${cx}" cy="${cy}" r="15" fill="#6D8FB2" stroke="#fff" stroke-width="1"></circle>
    <line x1="-11" y1="0" x2="11" y2="0" stroke-width="1" stroke="#fff"></line>`;
        FamilyTree.templates.myTemplate = Object.assign(
            {},
            FamilyTree.templates.tommy
        );
        FamilyTree.templates.myTemplate.size = [250, 100];

        FamilyTree.templates.myTemplate.defs = `<g transform="matrix(1,0,0,1,-12,-9)" id="plus">${minus}</g><g transform="matrix(1,0,0,1,-12,-9)" id="minus">${minus}</g>`;
        FamilyTree.templates.myTemplate.node = `<rect x="0" y="0" height="{h}" width="{w}" stroke-width="1" fill="white" stroke="white" rx="7" ry="7"></rect>
    <circle cx="50" cy="50" fill="#039BE5" r="35"></circle>`;
        FamilyTree.templates.myTemplate.link =
            '<path stroke-linejoin="round" stroke="#6D8FB2" stroke-width="1px" fill="none" d="{edge}" />';
        FamilyTree.templates.myTemplate.field_0 =
            "<text " +
            FamilyTree.attr.width +
            ' ="150" style="font-size: 16px; font-family: mikhak" fill="#19447E" x="160" y="45" text-anchor="middle">{val}</text>';
        FamilyTree.templates.myTemplate.field_1 =
            "<text " +
            FamilyTree.attr.width +
            ' ="230" style="font-size: 14px; font-family: mikhak" fill="#19447E" x="160" y="70" text-anchor="middle">{val}</text>';
        FamilyTree.templates.myTemplate.img_0 = `<clipPath id="ulaImg"><circle cx="50" cy="50" r="35" fill="#248CE6"></circle></clipPath>
    <image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="12" y="10" width="75" height="75"></image>`;
        FamilyTree.templates.myTemplate.plus = plus;
        FamilyTree.templates.myTemplate.minus = minus;

        FamilyTree.templates.tweet = Object.assign(
            {},
            FamilyTree.templates.myTemplate
        );
        FamilyTree.templates.tweet.node += tweetSvg;
        FamilyTree.templates.tweet.field_0 =
            "<text " +
            FamilyTree.attr.width +
            ' ="150" style="font-size: 16px; font-family: mikhak" fill="#6D8FB2" x="160" y="45" text-anchor="middle">{val}</text>';
        FamilyTree.templates.tweet.field_1 =
            "<text " +
            FamilyTree.attr.width +
            ' ="230" style="font-size: 14px; font-family: mikhak" fill="#6D8FB2" x="160" y="70" text-anchor="middle">{val}</text>';

        let family = new FamilyTree(document.getElementById("tree"), {
            orientation: FamilyTree.orientation.top,
            mouseScrool: FamilyTree.none,
            template: "myTemplate",
            partnerChildrenSplitSeparation: 40,
            levelSeparation: 80,
            nodeBinding: {
                field_0: "name",
                field_1: "fName",
                img_0: "img",
                tweet: "tweet",
            },
        });

        family.onInit(() => {
            family.collapse(1, [6, 9, 10]);
        });

        family.on("render-link", function (sender, args) {
            if (args.cnode.ppid != undefined) {
                cx = args.p.xa + 12;
                cy = args.p.ya + 9;
                args.html += `<use data-ctrl-ec-id="${args.node.id}" xlink:href="#minus" x="${cx}" y="${cy}"/>`;
            }
        });

        if (this.props.treeData) family.load(this.props?.treeData || []);
    }

    simulateClick(target) {
        if (target) {
            if (this.props?.treeData?.length > 7) {
                let viewBox = 0;
                for (let i = 0; i < this.props?.treeData?.length - 7; i++) {
                    viewBox += 200;
                }
                target.setAttribute("viewBox", `${viewBox} -200 1519 700`);
                target.setAttribute("width", "100%");
                target.setAttribute("height", "100%");
                target.setAttribute("preserveAspectRatio", "xMidYMid");
            }
        }
    }

    render() {
        setTimeout(() => {
            const svgElement = document.querySelector("#tree svg");
            if (svgElement) {
                this.simulateClick(svgElement);
            }
        }, 150);
        return (
            <div
                id="tree"
                style={{ overflowX: "scroll", fontFamily: "mikhak" }}
            ></div>
        );
    }
}

export default FamilyTreeComponent;
