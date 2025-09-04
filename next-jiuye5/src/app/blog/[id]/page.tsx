import { Card } from 'antd';
import { data } from '@/data';

interface IParams {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: IParams) {
  return {
    title: `blog${params.id}`,
  };
}

export default function Page({ params }: IParams) {
  const item = data.find((item) => item.id === +params.id)!;
  return (
    <Card title={item.title}>
      <p>{item.body}</p>
    </Card>
  );
}
