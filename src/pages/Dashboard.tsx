"use client"

import { useState, useEffect } from 'react';
import { getVisitors, addVisitor } from '../utils/visitors';

export default function DashboardPage() {
  const [visitors, setVisitors] = useState<any[]>([]);
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVisitors = async () => {
      try {
        const data = await getVisitors();
        setVisitors(data);
        setTotalVisitors(data.length);
      } catch (error) {
        console.error('Error loading visitors:', error);
      } finally {
        setLoading(false);
      }
    };

    loadVisitors();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard Pengunjung</h1>
        
        {/* Stats Card */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Statistik</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-600 mb-1">Total Pengunjung</p>
              <p className="text-2xl font-bold text-blue-800">{totalVisitors}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-600 mb-1">Hari Ini</p>
              <p className="text-2xl font-bold text-green-800">
                {visitors.filter(v => {
                  const today = new Date().toLocaleDateString();
                  return new Date(v.timestamp).toLocaleDateString() === today;
                }).length}
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-purple-600 mb-1">Bulan Ini</p>
              <p className="text-2xl font-bold text-purple-800">
                {visitors.filter(v => {
                  const currentMonth = new Date().getMonth();
                  return new Date(v.timestamp).getMonth() === currentMonth;
                }).length}
              </p>
            </div>
          </div>
        </div>

        {/* Visitors Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Daftar Pengunjung</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP Address</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Browser</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">OS</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waktu</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                      Loading...
                    </td>
                  </tr>
                ) : visitors.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                      Belum ada pengunjung
                    </td>
                  </tr>
                ) : (
                  visitors.map((visitor, index) => (
                    <tr key={visitor.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{visitor.ip}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{visitor.browser}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{visitor.os}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(visitor.timestamp).toLocaleString('id-ID')}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 