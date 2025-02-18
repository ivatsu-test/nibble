import route from '@/route';
import { redirect } from 'next/navigation';

export default function HomePage() {
  return redirect(route.start);
}
