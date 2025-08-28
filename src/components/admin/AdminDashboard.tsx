import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Eye, Users, TrendingUp, BarChart3 } from "lucide-react";

const StatCard = ({ title, value, icon: Icon, trend, color = "blue" }) => (
  <Card className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-white/70 text-sm font-medium">{title}</p>
        <p className="text-2xl font-bold text-white mt-1">{value}</p>
        {trend && (
          <p className="text-sm text-green-400 flex items-center mt-1">
            <TrendingUp className="w-4 h-4 mr-1" />
            {trend}% this month
          </p>
        )}
      </div>
      <div className={`p-3 rounded-lg bg-${color}-500/20`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
  </Card>
);

const AdminDashboard = ({ analytics }) => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Total Visitors"
        value={analytics.totalVisitors.toLocaleString()}
        icon={Eye}
        trend={12.5}
        color="blue"
      />
      <StatCard
        title="Inquiries"
        value={analytics.totalInquiries}
        icon={Users}
        trend={8.2}
        color="green"
      />
      <StatCard
        title="Conversion Rate"
        value={`${analytics.conversionRate}%`}
        icon={TrendingUp}
        trend={2.1}
        color="purple"
      />
      <StatCard
        title="Revenue"
        value={`₹${analytics.revenue.toLocaleString()}`}
        icon={BarChart3}
        trend={15.3}
        color="orange"
      />
    </div>
    {/* ...existing code for quick actions and top products... */}
  </div>
);

export default AdminDashboard;
