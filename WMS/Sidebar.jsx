import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white p-4">
            <h2 className="text-xl font-bold mb-6">WMS 관리</h2>
            <ul className="space-y-2">
                <li><Link to="/inout">입/출고 관리</Link></li>
                <li><Link to="/stock">재고 관리</Link></li>
                <li><Link to="/tasks">작업 관리</Link></li>
                <li><Link to="/picking">피킹/패킹</Link></li>
                <li><Link to="/layout">창고 레이아웃</Link></li>
            </ul>
        </div>
    );
}
