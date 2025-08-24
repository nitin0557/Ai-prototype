
import {useChatStore} from "@/data/store/ChatStore";

const models = ["GPT-3.5", "GPT-4", "Custom"];

export default function ModelSelector() {

    const model = useChatStore((s) => s.model);
    const setModel = useChatStore((s) => s.setModel);
    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium">Select Model</label>
            <select
                className="w-full rounded border p-2"
                value={model}
                onChange={(e) => setModel(e.target.value)}            >
                {models.map((m) => (
                    <option key={m}>{m}</option>
                ))}
            </select>
        </div>
    );
}
