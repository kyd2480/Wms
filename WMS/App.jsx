// 메인 구조: App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import InOutPage from './pages/InOutPage';
import StockPage from './pages/StockPage';
import TaskPage from './pages/TaskPage';
import PickingPackingPage from './pages/PickingPackingPage';
import LayoutPage from './pages/LayoutPage';

export default function App() {
    return (
        <Router>
            <div className="flex min-h-screen">
                <Sidebar />
                <main className="flex-1 p-6 bg-gray-100">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/inout" element={<InOutPage />} />
                        <Route path="/stock" element={<StockPage />} />
                        <Route path="/tasks" element={<TaskPage />} />
                        <Route path="/picking" element={<PickingPackingPage />} />
                        <Route path="/layout" element={<LayoutPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

// 사이드바: Sidebar.jsx
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="w-64 bg-blue-800 text-white p-4 space-y-4">
            <h1 className="text-xl font-bold">WMS 관리</h1>
            <nav className="flex flex-col space-y-2">
                <Link to="/">🏠 대시보드</Link>
                <Link to="/inout">📦 입/출고 관리</Link>
                <Link to="/stock">📊 재고 관리</Link>
                <Link to="/tasks">📝 작업 관리</Link>
                <Link to="/picking">🛒 피킹/패킹</Link>
                <Link to="/layout">📐 창고 레이아웃</Link>
            </nav>
        </div>
    );
}

// Dashboard.jsx
export default function Dashboard() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">대시보드</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white shadow p-4 rounded">📦 입출고 상태</div>
                <div className="bg-white shadow p-4 rounded">📊 재고 현황</div>
                <div className="bg-white shadow p-4 rounded">📝 작업 진행률</div>
                <div className="bg-white shadow p-4 rounded">🛒 피킹/패킹 상태</div>
            </div>
        </div>
    );
}

// InOutPage.jsx
export default function InOutPage() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">입/출고 관리</h2>
            <p>입고 등록, 출고 등록, 재고 이동 처리 구현 예정</p>
        </div>
    );
}

// StockPage.jsx
export default function StockPage() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">재고 관리</h2>
            <p>실시간 재고 확인, 위치 검색, 재고 조정 기능 구현 예정</p>
        </div>
    );
}

// TaskPage.jsx
export default function TaskPage() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">작업 관리</h2>
            <p>작업 지시 및 담당자 할당, 작업 상태 확인 구현 예정</p>
        </div>
    );
}

// PickingPackingPage.jsx
export default function PickingPackingPage() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">피킹/패킹</h2>
            <p>주문별 피킹, 포장 상태 확인 및 출고 처리 기능 구현 예정</p>
        </div>
    );
}

// LayoutPage.jsx
export default function LayoutPage() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">창고 레이아웃 관리</h2>
            <p>창고 내 적재 위치 및 공간 배치 최적화 UI 구현 예정</p>
        </div>
    );
}
