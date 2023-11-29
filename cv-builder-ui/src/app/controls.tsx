import { Data } from '../../../cv-html-builder';
import { generatePdf } from '@/app/api';

interface Props {
    data: Data;
    setData: (data: Data) => void;
}

export default function ControlsComponent({ data, setData }: Props) {
    return <>
        <label className="block">Name</label>
        <input value={data.name} onChange={e => setData({ ...data, name: e.target.value })} />

        <br /><br />

        <label className="block">Address</label>
        <input value={data.address} onChange={e => setData({ ...data, address: e.target.value })} />

        <br /><br />

        <button className="border border-black rounded p-1" onClick={() => generatePdf(data)}>Generate PDF</button>
    </>;
}
