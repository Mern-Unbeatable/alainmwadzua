import React from 'react';
import {
  BarChart3,
  Users,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  TrendingDown,
} from 'lucide-react';

const STAT_CARDS = [
  { label: 'Total Revenue', value: '—', icon: DollarSign, trend: null },
  { label: 'Total Orders', value: '—', icon: ShoppingCart, trend: null },
  { label: 'Total Leads', value: '—', icon: Users, trend: null },
  { label: 'Conversion Rate', value: '—', icon: BarChart3, trend: null },
];

const StatCard = ({ label, value, icon: Icon }) => (
  <div className='bg-white rounded-2xl border border-gray-100 p-6 flex items-center gap-5 shadow-sm'>
    <div className='w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shrink-0'>
      <Icon size={22} className='text-orange-500' aria-hidden='true' />
    </div>
    <div>
      <p className='text-sm text-gray-500 font-medium'>{label}</p>
      <p className='text-2xl font-bold text-gray-900 mt-0.5'>{value}</p>
    </div>
  </div>
);

const Dashboard = () => (
  <div className='space-y-8'>
    <div>
      <h1 className='text-2xl font-bold text-gray-900'>Dashboard</h1>
      <p className='text-gray-500 text-sm mt-1'>
        Welcome back. Here's what's happening.
      </p>
    </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5'>
      {STAT_CARDS.map((card) => (
        <StatCard key={card.label} {...card} />
      ))}
    </div>

    <div className='bg-white rounded-2xl border border-gray-100 p-6 shadow-sm'>
      <h2 className='text-base font-semibold text-gray-800 mb-4'>
        Recent Activity
      </h2>
      <div className='text-sm text-gray-400 text-center py-10'>
        Connect your backend to see live data.
      </div>
    </div>
  </div>
);

export default Dashboard;
