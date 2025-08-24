import { useState } from "react";

export default function ParametersPanel() {
    const [temperature, setTemperature] = useState(0.7);
    const [maxTokens, setMaxTokens] = useState(512);

    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm">Temperature: {temperature}</label>
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.1}
                    value={temperature}
                    onChange={(e) => setTemperature(Number(e.target.value))}
                />
            </div>
            <div>
                <label className="block text-sm">Max Tokens: {maxTokens}</label>
                <input
                    type="number"
                    className="w-full rounded border p-2"
                    value={maxTokens}
                    onChange={(e) => setMaxTokens(Number(e.target.value))}
                />
            </div>
        </div>
    );
}
