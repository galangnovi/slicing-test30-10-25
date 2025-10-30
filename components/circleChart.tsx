
interface ChartProps{
    percentage: number
    size: number
    strokeWidth: number
}
export default function CircleChart({percentage, size, strokeWidth}: ChartProps){
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 280) * circumference;
    return(
        <div style={{ textAlign: 'center' }}>
            <svg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
                <circle
                stroke="#C1C1C1"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={radius}
                cx={size / 2}
                cy={size / 2}
                />
                <circle
                stroke="#17A9E2" 
                fill="transparent"
                strokeWidth={strokeWidth}
                r={radius}
                cx={size / 2}
                cy={size / 2}
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={offset}
                strokeLinecap="round"
                style={{ 
                    transition: 'stroke-dashoffset 0.5s ease-in-out',
                    transform: 'rotate(-90deg)',
                    transformOrigin: '50% 50%',
                }}
                />
                <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="35"
                fontWeight="bold"
                fill="#333"
                >
                {percentage}%
                </text>
            </svg>
        </div>
    )
}