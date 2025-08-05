import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  PieChart, 
  TrendingUp, 
  BarChart3, 
  Activity,
  DollarSign,
  Calendar,
  Target,
  Download,
  Filter,
  RefreshCw
} from "lucide-react";

const Analytics = () => {
  const performanceMetrics = [
    { label: "Total Return", value: "+23.45%", change: "+2.1%", period: "All Time" },
    { label: "30D Performance", value: "+8.92%", change: "+1.2%", period: "Last 30 Days" },
    { label: "Sharpe Ratio", value: "1.67", change: "+0.12", period: "Risk-Adjusted" },
    { label: "Max Drawdown", value: "-12.4%", change: "-2.1%", period: "Worst Period" },
  ];

  const topPerformers = [
    { token: "LINK", return: "+45.2%", invested: "$15,000", current: "$21,780", allocation: "12%" },
    { token: "ETH", return: "+28.7%", invested: "$50,000", current: "$64,350", allocation: "35%" },
    { token: "UNI", return: "+18.9%", invested: "$20,000", current: "$23,780", allocation: "15%" },
    { token: "AAVE", return: "+12.4%", invested: "$25,000", current: "$28,100", allocation: "18%" },
  ];

  const tradingStats = [
    { metric: "Total Trades", value: "248", change: "+12" },
    { metric: "Win Rate", value: "67.3%", change: "+2.1%" },
    { metric: "Avg Trade Size", value: "$2,340", change: "+$145" },
    { metric: "Trading Volume", value: "$580K", change: "+$45K" },
  ];

  const marketData = [
    { pair: "ETH/USDT", price: "$2,345.67", volume: "$1.2B", change: "+5.2%" },
    { pair: "BTC/USDT", price: "$43,210.12", volume: "$890M", change: "-2.1%" },
    { pair: "LINK/USDT", price: "$14.87", volume: "$156M", change: "+8.9%" },
    { pair: "UNI/USDT", price: "$6.45", volume: "$89M", change: "+3.4%" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics & Research</h1>
          <p className="text-muted-foreground mt-2">
            Comprehensive analysis and insights for data-driven trading decisions
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh Data
          </Button>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => (
          <Card key={index} className="bg-gradient-to-br from-card to-secondary border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                <div className="flex items-center justify-between">
                  <Badge 
                    variant="secondary" 
                    className={`${
                      metric.change.startsWith('+') ? 'text-success bg-success/10' : 'text-destructive bg-destructive/10'
                    }`}
                  >
                    {metric.change}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{metric.period}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Analytics Tabs */}
      <Card className="bg-gradient-to-br from-card to-secondary border-border">
        <CardContent className="p-6">
          <Tabs defaultValue="portfolio" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="trading">Trading</TabsTrigger>
              <TabsTrigger value="market">Market Data</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
            </TabsList>
            
            <TabsContent value="portfolio" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Portfolio Allocation Chart Placeholder */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Portfolio Allocation</h3>
                  <div className="h-64 bg-background/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                    <div className="text-center">
                      <PieChart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Portfolio Pie Chart</p>
                    </div>
                  </div>
                </div>
                
                {/* Top Performers */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Top Performers</h3>
                  <div className="space-y-3">
                    {topPerformers.map((performer, index) => (
                      <div key={index} className="p-3 rounded-lg bg-background/50 border border-border">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-primary-foreground">{performer.token}</span>
                            </div>
                            <span className="font-medium text-foreground">{performer.token}</span>
                          </div>
                          <Badge variant="secondary" className="text-success bg-success/10">
                            {performer.return}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div>
                            <div className="text-muted-foreground">Invested</div>
                            <div className="font-medium text-foreground">{performer.invested}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Current</div>
                            <div className="font-medium text-foreground">{performer.current}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Allocation</div>
                            <div className="font-medium text-foreground">{performer.allocation}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="trading" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Trading Performance Chart */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Trading Performance</h3>
                  <div className="h-64 bg-background/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Performance Chart</p>
                    </div>
                  </div>
                </div>
                
                {/* Trading Statistics */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Trading Statistics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {tradingStats.map((stat, index) => (
                      <div key={index} className="p-4 rounded-lg bg-background/50 border border-border">
                        <div className="text-sm text-muted-foreground">{stat.metric}</div>
                        <div className="text-xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-xs text-success">{stat.change}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="market" className="mt-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Live Market Data</h3>
                <div className="space-y-3">
                  {marketData.map((data, index) => (
                    <div key={index} className="p-4 rounded-lg bg-background/50 border border-border">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="font-medium text-foreground">{data.pair}</span>
                          <Badge variant="outline">{data.volume} Vol</Badge>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-foreground">{data.price}</div>
                          <div className={`text-sm ${data.change.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
                            {data.change}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="research" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Market Research</h3>
                  <div className="h-64 bg-background/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                    <div className="text-center">
                      <Activity className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Research Dashboard</p>
                      <p className="text-sm text-muted-foreground">Technical analysis and market insights</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Key Metrics</h3>
                  <div className="space-y-3">
                    <div className="p-4 rounded-lg bg-background/50 border border-border">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Market Cap</span>
                        <span className="font-medium text-foreground">$2.4T</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 border border-border">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">24h Volume</span>
                        <span className="font-medium text-foreground">$89.2B</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 border border-border">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Fear & Greed</span>
                        <Badge variant="secondary" className="text-warning bg-warning/10">
                          Neutral (52)
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;