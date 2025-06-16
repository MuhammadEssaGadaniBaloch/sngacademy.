import { Loader } from "../components/ui/loader";


export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center">
    <Loader/>
    </div>
  );
}
