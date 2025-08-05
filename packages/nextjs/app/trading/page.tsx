import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  RefreshCw, 
  Settings,
  ArrowUpDown,
  Zap,
  Target,
  Clock
} from "lucide-react";

const Trading = () => {
  const orderBook = {
    bids: [
      { price: "2,345.67", amount: "1.24", total: "2,908.63" },
      { price: "2,345.45", amount: "0.89", total: "2,087.45" },
      { price: "2,345.23", amount: "2.15", total: "5,042.24" },
      { price: "2,345.01", amount: "0.67", total: "1,571.16" },
    ],
    asks: [
      { price: "2,345.89", amount: "0.95", total: "2,228.60" },
      { price: "2,346.12", amount: "1.87", total: "4,387.24" },
      { price: "2,346.34", amount: "0.43", total: "1,008.93" },
      { price: "2,346.56", amount: "2.12", total: "4,974.71" },
    ]
  };

  const recentTrades = [
    { price: "2,345.67", amount: "0.45", time: "12:34:56", type: "buy" },
    { price: "2,345.45", amount: "1.23", time: "12:34:52", type: "sell" },
    { price: "2,345.89", amount: "0.67", time: "12:34:48", type: "buy" },
    { price: "2,345.34", amount: "2.1", time: "12:34:44", type: "sell" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Trading Terminal</h1>
          <p className="text-muted-foreground mt-2">
            Execute trades with advanced tools and real-time market data
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Terminal Settings
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh Data
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Trading Chart Placeholder */}
        <Card className="lg:col-span-3 bg-gradient-to-br from-card to-secondary border-border">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full"></div>
                <span>ETH/USDT</span>
                <Badge variant="secondary" className="text-success bg-success/10">
                  +5.24%
                </Badge>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-foreground">$2,345.67</div>
                <div className="text-sm text-success">+$118.45</div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96 bg-background/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Trading Chart</p>
                <p className="text-sm text-muted-foreground">Real-time price chart will appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trading Panel */}
        <div className="space-y-6">
          {/* Order Form */}
          <Card className="bg-gradient-to-br from-card to-secondary border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <ArrowUpDown className="w-5 h-5 text-primary" />
                <span>Place Order</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="buy" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="buy" className="text-success data-[state=active]:bg-success/20">Buy</TabsTrigger>
                  <TabsTrigger value="sell" className="text-destructive data-[state=active]:bg-destructive/20">Sell</TabsTrigger>
                </TabsList>
                <TabsContent value="buy" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Price (USDT)</label>
                    <Input placeholder="2,345.67" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Amount (ETH)</label>
                    <Input placeholder="0.00" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Total (USDT)</label>
                    <Input placeholder="0.00" disabled />
                  </div>
                  <Button className="w-full bg-success hover:bg-success/90">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Buy ETH
                  </Button>
                </TabsContent>
                <TabsContent value="sell" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Price (USDT)</label>
                    <Input placeholder="2,345.67" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Amount (ETH)</label>
                    <Input placeholder="0.00" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Total (USDT)</label>
                    <Input placeholder="0.00" disabled />
                  </div>
                  <Button className="w-full bg-destructive hover:bg-destructive/90">
                    <TrendingDown className="w-4 h-4 mr-2" />
                    Sell ETH
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Quick Trade */}
          <Card className="bg-gradient-to-br from-card to-secondary border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-warning" />
                <span>Quick Trade</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Target className="w-4 h-4 mr-2" />
                Market Buy
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Target className="w-4 h-4 mr-2" />
                Market Sell
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Clock className="w-4 h-4 mr-2" />
                Stop Loss
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Order Book */}
        <Card className="bg-gradient-to-br from-card to-secondary border-border">
          <CardHeader>
            <CardTitle>Order Book</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Asks */}
              <div>
                <div className="text-sm text-muted-foreground mb-2">Asks</div>
                <div className="space-y-1">
                  {orderBook.asks.map((ask, index) => (
                    <div key={index} className="grid grid-cols-3 gap-2 text-xs">
                      <span className="text-destructive">{ask.price}</span>
                      <span className="text-foreground">{ask.amount}</span>
                      <span className="text-muted-foreground">{ask.total}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Spread */}
              <div className="text-center py-2 bg-background/50 rounded text-sm">
                Spread: $0.22 (0.01%)
              </div>
              
              {/* Bids */}
              <div>
                <div className="text-sm text-muted-foreground mb-2">Bids</div>
                <div className="space-y-1">
                  {orderBook.bids.map((bid, index) => (
                    <div key={index} className="grid grid-cols-3 gap-2 text-xs">
                      <span className="text-success">{bid.price}</span>
                      <span className="text-foreground">{bid.amount}</span>
                      <span className="text-muted-foreground">{bid.total}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Trades */}
        <Card className="bg-gradient-to-br from-card to-secondary border-border">
          <CardHeader>
            <CardTitle>Recent Trades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground mb-2">
                <span>Price</span>
                <span>Amount</span>
                <span>Time</span>
              </div>
              {recentTrades.map((trade, index) => (
                <div key={index} className="grid grid-cols-3 gap-2 text-xs">
                  <span className={trade.type === 'buy' ? 'text-success' : 'text-destructive'}>
                    {trade.price}
                  </span>
                  <span className="text-foreground">{trade.amount}</span>
                  <span className="text-muted-foreground">{trade.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Trading;