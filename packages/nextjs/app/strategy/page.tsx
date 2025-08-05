import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Zap, 
  Play, 
  Pause, 
  Settings, 
  Plus,
  TrendingUp,
  Target,
  Clock,
  DollarSign,
  Activity,
  Save,
  Copy
} from "lucide-react";

const Strategy = () => {
  const activeStrategies = [
    {
      name: "DCA ETH Strategy",
      status: "Active",
      performance: "+12.4%",
      invested: "$5,000",
      current: "$5,620",
      frequency: "Weekly",
      nextExecution: "2 days"
    },
    {
      name: "Grid Trading Bot",
      status: "Active",
      performance: "+8.7%",
      invested: "$10,000",
      current: "$10,870",
      frequency: "Continuous",
      nextExecution: "Active"
    },
    {
      name: "Momentum Scalping",
      status: "Paused",
      performance: "+3.2%",
      invested: "$2,500",
      current: "$2,580",
      frequency: "5min",
      nextExecution: "Paused"
    },
  ];

  const strategyTemplates = [
    {
      name: "Dollar Cost Averaging",
      description: "Regularly buy tokens to average out price volatility",
      difficulty: "Beginner",
      riskLevel: "Low",
      minAmount: "$100"
    },
    {
      name: "Grid Trading",
      description: "Profit from price fluctuations within a range",
      difficulty: "Intermediate",
      riskLevel: "Medium",
      minAmount: "$1,000"
    },
    {
      name: "Arbitrage Bot",
      description: "Exploit price differences across exchanges",
      difficulty: "Advanced",
      riskLevel: "Low",
      minAmount: "$5,000"
    },
    {
      name: "Momentum Trading",
      description: "Follow strong price trends for quick profits",
      difficulty: "Advanced",
      riskLevel: "High",
      minAmount: "$500"
    },
  ];

  const backtestResults = [
    { period: "1M", return: "+5.2%", trades: 24, winRate: "67%" },
    { period: "3M", return: "+18.7%", trades: 89, winRate: "71%" },
    { period: "6M", return: "+34.1%", trades: 156, winRate: "69%" },
    { period: "1Y", return: "+67.3%", trades: 342, winRate: "72%" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Strategy Builder</h1>
          <p className="text-muted-foreground mt-2">
            Create, test, and deploy automated trading strategies
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm">
            <Copy className="w-4 h-4 mr-2" />
            Import Strategy
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
            <Plus className="w-4 h-4 mr-2" />
            New Strategy
          </Button>
        </div>
      </div>

      {/* Active Strategies */}
      <Card className="bg-gradient-to-br from-card to-secondary border-border">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-primary" />
            <span>Active Strategies</span>
            <Badge variant="secondary">
              {activeStrategies.filter(s => s.status === 'Active').length} Running
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeStrategies.map((strategy, index) => (
              <div key={index} className="p-4 rounded-lg bg-background/50 border border-border">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="font-medium text-foreground">{strategy.name}</span>
                      <Badge 
                        variant={strategy.status === 'Active' ? 'default' : 'secondary'}
                        className={strategy.status === 'Active' ? 'bg-success text-success-foreground' : ''}
                      >
                        {strategy.status}
                      </Badge>
                      <Badge variant="outline" className="text-success">
                        {strategy.performance}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Invested</div>
                        <div className="font-medium text-foreground">{strategy.invested}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Current Value</div>
                        <div className="font-medium text-foreground">{strategy.current}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Frequency</div>
                        <div className="font-medium text-foreground">{strategy.frequency}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Next Execution</div>
                        <div className="font-medium text-foreground">{strategy.nextExecution}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4" />
                    </Button>
                    {strategy.status === 'Active' ? (
                      <Button variant="outline" size="sm">
                        <Pause className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm">
                        <Play className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Strategy Builder */}
      <Card className="bg-gradient-to-br from-card to-secondary border-border">
        <CardContent className="p-6">
          <Tabs defaultValue="templates" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="builder">Custom Builder</TabsTrigger>
              <TabsTrigger value="backtest">Backtest</TabsTrigger>
            </TabsList>
            
            <TabsContent value="templates" className="mt-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Strategy Templates</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {strategyTemplates.map((template, index) => (
                    <div key={index} className="p-4 rounded-lg bg-background/50 border border-border">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-foreground">{template.name}</h4>
                          <div className="flex space-x-2">
                            <Badge variant="outline" className="text-xs">
                              {template.difficulty}
                            </Badge>
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${
                                template.riskLevel === 'Low' ? 'border-success text-success' :
                                template.riskLevel === 'Medium' ? 'border-warning text-warning' :
                                'border-destructive text-destructive'
                              }`}
                            >
                              {template.riskLevel} Risk
                            </Badge>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{template.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            Min: {template.minAmount}
                          </span>
                          <Button size="sm" variant="outline">
                            Use Template
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="builder" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground">Custom Strategy Builder</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Strategy Name</label>
                      <Input placeholder="Enter strategy name..." />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Trading Pair</label>
                      <Input placeholder="e.g., ETH/USDT" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Entry Condition</label>
                        <Input placeholder="Price drops 5%" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Exit Condition</label>
                        <Input placeholder="Profit 10%" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Investment Amount</label>
                        <Input placeholder="$1000" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Risk Per Trade</label>
                        <Input placeholder="2%" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium text-foreground">Strategy Logic Preview</h4>
                    <div className="h-64 bg-background/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                      <div className="text-center">
                        <Zap className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">Strategy Logic Visualizer</p>
                        <p className="text-sm text-muted-foreground">Build your strategy conditions</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button className="bg-gradient-to-r from-primary to-accent">
                    <Save className="w-4 h-4 mr-2" />
                    Save Strategy
                  </Button>
                  <Button variant="outline">
                    <Play className="w-4 h-4 mr-2" />
                    Test Strategy
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="backtest" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground">Backtest Results</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {backtestResults.map((result, index) => (
                    <div key={index} className="p-4 rounded-lg bg-background/50 border border-border">
                      <div className="text-center space-y-2">
                        <div className="text-sm text-muted-foreground">{result.period}</div>
                        <div className="text-xl font-bold text-success">{result.return}</div>
                        <div className="text-xs text-muted-foreground">
                          {result.trades} trades • {result.winRate} win rate
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="h-64 bg-background/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Backtest Performance Chart</p>
                    <p className="text-sm text-muted-foreground">Historical performance visualization</p>
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

export default Strategy;