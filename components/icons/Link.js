export default function LinkIcon({ fill, width, height }) {
    return (
        <svg
            width={width ? width : 50}
            height={height ? height : 50}
            viewBox="0 0 80 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.27565 22.7143C8.27565 15.06 13.7198 8.83813 20.4173 8.83813H36.084V0.333374H20.4173C15.2235 0.333374 10.2424 2.69136 6.56981 6.8886C2.89722 11.0858 0.833984 16.7785 0.833984 22.7143C0.833984 28.6501 2.89722 34.3428 6.56981 38.5401C10.2424 42.7373 15.2235 45.0953 20.4173 45.0953H36.084V36.5905H20.4173C13.7198 36.5905 8.27565 30.3686 8.27565 22.7143ZM24.334 27.1905H55.6673V18.2381H24.334V27.1905ZM59.584 0.333374H43.9173V8.83813H59.584C66.2815 8.83813 71.7257 15.06 71.7257 22.7143C71.7257 30.3686 66.2815 36.5905 59.584 36.5905H43.9173V45.0953H59.584C64.7778 45.0953 69.7589 42.7373 73.4315 38.5401C77.1041 34.3428 79.1673 28.6501 79.1673 22.7143C79.1673 16.7785 77.1041 11.0858 73.4315 6.8886C69.7589 2.69136 64.7778 0.333374 59.584 0.333374Z"
                fill={fill ? fill : "#03A9F4"}
            />
        </svg>
    );
}
