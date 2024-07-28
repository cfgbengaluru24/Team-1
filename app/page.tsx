import fs from 'fs';
import path from 'path';
import { MetricData } from '../src/types';
import DataComparison from '../src/components/DataComparison';
import CompareGraph from '@/src/components/CompareGraph';

export default async function HomePage() {
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  const baselineData: MetricData[] = data.baselineData;
  const endlineData: MetricData[] = data.endlineData;

  return (
    <div id="google_translate_element" className='w-screen h-fit p-10'>
      <h1 className='text-center text-3xl font-bold mb-5'>Our Impact</h1>
      <div className='w-[100%] h-[27rem] flex justify-center items-center'>
        <CompareGraph baselineData={baselineData} endlineData={endlineData} />
      </div>
      <div className="w-screen h-[40%] mt-20 flex justify-center items-center gap-[10rem]">
        <div id="left" className=''>
          <h2 className='text-2xl font-semibold mb-2'>Baseline Data</h2>
          <DataComparison data={baselineData} />
        </div>
        <div id="right">
          <h2 className='text-2xl font-semibold mb-2'>Endline Data</h2>
          <DataComparison data={endlineData} />
        </div>
      </div>
    </div>
  );
}
