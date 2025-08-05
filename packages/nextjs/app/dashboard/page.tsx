import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Activity, 
  Eye,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const Dashboard = () => {
  const portfolioStats = [
    { label: "Total Portfolio Value", value: "$247,850.32", change: "+12.4%", positive: true },
    { label: "24h Change", value: "+$3,240.18", change: "+1.32%", positive: true },
    { label: "Total Profit/Loss", value: "+$47,850.32", change: "+23.9%", positive: true },
    { label: "Active Positions", value: "12", change: "+2", positive: true },
  ];

  const topTokens = [
    { symbol: "ETH", name: "Ethereum", price: "$2,345.67", change: "+5.2%", positive: true },
    { symbol: "BTC", name: "Bitcoin", price: "$43,210.12", change: "-2.1%", positive: false },
    { symbol: "LINK", name: "Chainlink", price: "$14.87", change: "+8.9%", positive: true },
    { symbol: "UNI", name: "Uniswap", price: "$6.45", change: "+3.4%", positive: true },
  ];

  const recentTransactions = [
    { type: "Buy", token: "ETH", amount: "2.5", value: "$5,864.18", time: "2 min ago" },
    { type: "Sell", token: "BTC", amount: "0.1", value: "$4,321.01", time: "15 min ago" },
    { type: "Swap", token: "LINK → UNI", amount: "100", value: "$645.00", time: "1h ago" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Trading Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Monitor your portfolio performance and market opportunities
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            Market Overview
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
            <Activity className="w-4 h-4 mr-2" />
            Start Trading
          </Button>
        </div>
      </div>

      {/* Portfolio Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioStats.map((stat, index) => (
          <Card key={index} className="bg-gradient-to-br from-card to-secondary border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <Badge 
                  variant="secondary" 
                  className={`${
                    stat.positive ? 'text-success bg-success/10' : 'text-destructive bg-destructive/10'
                  }`}
                >
                  {stat.positive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                  {stat.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Tokens */}
        <Card className="lg:col-span-2 bg-gradient-to-br from-card to-secondary border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>Top Performing Tokens</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topTokens.map((token, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-primary-foreground">{token.symbol}</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{token.name}</div>
                      <div className="text-sm text-muted-foreground">{token.symbol}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-foreground">{token.price}</div>
                    <div className={`text-sm ${token.positive ? 'text-success' : 'text-destructive'}`}>
                      {token.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card className="bg-gradient-to-br from-card to-secondary border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-accent" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((tx, index) => (
                <div key={index} className="p-3 rounded-lg bg-background/50">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-foreground">{tx.type} {tx.token}</div>
                      <div className="text-sm text-muted-foreground">{tx.amount} • {tx.value}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">{tx.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-br from-card to-secondary border-border">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <DollarSign className="w-5 h-5 text-warning" />
            <span>Quick Actions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <TrendingUp className="w-6 h-6" />
              <span>Buy Token</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <TrendingDown className="w-6 h-6" />
              <span>Sell Token</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Activity className="w-6 h-6" />
              <span>Swap Tokens</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Eye className="w-6 h-6" />
              <span>View Markets</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;