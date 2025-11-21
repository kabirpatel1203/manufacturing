import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, DollarSign, Package, Users, Zap } from 'lucide-react';

const PowerBIDashboard = () => {
  return (
    <div className="bg-white rounded-[20px] border border-gray-200 overflow-hidden shadow-xl">
      {/* Dashboard Header */}
      <div className="bg-[#2C3E50] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[#F39C12] rounded flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-semibold">Manufacturing Analytics Dashboard</h3>
        </div>
        <div className="text-sm opacity-80">Last Updated: Today, 2:30 PM</div>
      </div>

      {/* KPI Cards */}
      <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="w-5 h-5 text-green-600" />
            <span className="text-xs text-green-600 font-medium"></span>
          </div>
          <div className="text-2xl font-bold text-gray-900">8 SKUs</div>
          <div className="text-sm text-gray-600">Reorder Alerts:</div>
        </div>

        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <Package className="w-5 h-5 text-blue-600" />
            <span className="text-xs text-blue-600 font-medium"></span>
          </div>
          <div className="text-2xl font-bold text-gray-900">12</div>
          <div className="text-sm text-gray-600">Days until Stockout:</div>
        </div>

        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            <span className="text-xs text-purple-600 font-medium"></span>
          </div>
          <div className="text-2xl font-bold text-gray-900">+5.2%</div>
          <div className="text-sm text-gray-600">Gross Margin %</div>
        </div>

        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-5 h-5 text-orange-600" />
            <span className="text-xs text-orange-600 font-medium"></span>
          </div>
          <div className="text-2xl font-bold text-gray-900">3</div>
          <div className="text-sm text-gray-600">Slipping Accounts</div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="p-6 grid md:grid-cols-2 gap-6">
        {/* Sales Performance Chart */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
            Sales Performance
          </h4>
          <div className="h-32 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg flex items-end justify-between p-4">
            <div className="w-8 bg-blue-400 rounded-t" style={{ height: '60%' }}></div>
            <div className="w-8 bg-blue-500 rounded-t" style={{ height: '80%' }}></div>
            <div className="w-8 bg-blue-600 rounded-t" style={{ height: '95%' }}></div>
            <div className="w-8 bg-blue-700 rounded-t" style={{ height: '75%' }}></div>
            <div className="w-8 bg-blue-800 rounded-t" style={{ height: '85%' }}></div>
            <div className="w-8 bg-blue-900 rounded-t" style={{ height: '100%' }}></div>
          </div>
          <div className="mt-2 text-sm text-gray-600 flex justify-between">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
          </div>
        </div>

        {/* Production Metrics */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Zap className="w-5 h-5 mr-2 text-green-600" />
            Production Metrics
          </h4>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Injection Molding</span>
                <span className="font-medium">92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Extrusion</span>
                <span className="font-medium">87%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Quality Control</span>
                <span className="font-medium">96%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '96%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-6 pb-6">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h5 className="font-semibold text-gray-900">Real-time Manufacturing Intelligence</h5>
              <p className="text-sm text-gray-600 mt-1">Track production, sales, and KPIs all in one dashboard</p>
            </div>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Live Data</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerBIDashboard;