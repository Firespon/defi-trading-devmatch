import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, Brain, CheckCircle, Clock, Target, TrendingDown, TrendingUp, Zap } from "lucide-react";

const AIAnalysis = () => {
  const aiPredictions = [
    {
      token: "ETH",
      prediction: "Bullish",
      confidence: 85,
      targetPrice: "$2,650",
      timeframe: "7 days",
      reasoning: "Strong technical indicators, increasing institutional adoption",
    },
    {
      token: "BTC",
      prediction: "Neutral",
      confidence: 62,
      targetPrice: "$45,200",
      timeframe: "14 days",
      reasoning: "Mixed signals, consolidation pattern forming",
    },
    {
      token: "LINK",
      prediction: "Bullish",
      confidence: 78,
      targetPrice: "$18.50",
      timeframe: "10 days",
      reasoning: "Partnership announcements, positive sentiment analysis",
    },
  ];

  const marketInsights = [
    {
      title: "DeFi TVL Surge",
      description: "Total Value Locked in DeFi protocols increased by 15% this week",
      impact: "Positive",
      confidence: "High",
    },
    {
      title: "Institutional Accumulation",
      description: "Large wallets continue accumulating ETH despite recent volatility",
      impact: "Positive",
      confidence: "Medium",
    },
    {
      title: "Regulatory Uncertainty",
      description: "Pending legislation could impact market sentiment",
      impact: "Negative",
      confidence: "Medium",
    },
  ];

  const tradingSignals = [
    { symbol: "ETH/USDT", signal: "Buy", strength: "Strong", entry: "$2,345", target: "$2,650", stop: "$2,200" },
    { symbol: "BTC/USDT", signal: "Hold", strength: "Medium", entry: "$43,210", target: "$45,200", stop: "$41,000" },
    { symbol: "LINK/USDT", signal: "Buy", strength: "Medium", entry: "$14.87", target: "$18.50", stop: "$13.50" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">AI Market Analysis</h1>
          <p className="text-muted-foreground mt-2">
            Advanced AI-powered insights and predictions for optimal trading decisions
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm">
            <Clock className="w-4 h-4 mr-2" />
            Analysis History
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
            <Brain className="w-4 h-4 mr-2" />
            Generate New Analysis
          </Button>
        </div>
      </div>

      {/* AI Predictions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {aiPredictions.map((prediction, index) => (
          <Card key={index} className="bg-gradient-to-br from-card to-secondary border-border">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">{prediction.token}</span>
                  </div>
                  <span>{prediction.token} Analysis</span>
                </div>
                <Badge
                  variant="secondary"
                  className={`${
                    prediction.prediction === "Bullish"
                      ? "text-success bg-success/10"
                      : prediction.prediction === "Bearish"
                        ? "text-destructive bg-destructive/10"
                        : "text-warning bg-warning/10"
                  }`}
                >
                  {prediction.prediction}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Confidence</span>
                  <span className="text-foreground font-medium">{prediction.confidence}%</span>
                </div>
                <Progress value={prediction.confidence} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground">Target Price</div>
                  <div className="font-medium text-foreground">{prediction.targetPrice}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Timeframe</div>
                  <div className="font-medium text-foreground">{prediction.timeframe}</div>
                </div>
              </div>

              <div>
                <div className="text-muted-foreground text-sm mb-1">AI Reasoning</div>
                <p className="text-sm text-foreground">{prediction.reasoning}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Market Insights */}
      <Card className="bg-gradient-to-br from-card to-secondary border-border">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span>Market Insights</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketInsights.map((insight, index) => (
              <div key={index} className="p-4 rounded-lg bg-background/50 space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-medium text-foreground">{insight.title}</h3>
                  <div className="flex items-center space-x-1">
                    {insight.impact === "Positive" ? (
                      <CheckCircle className="w-4 h-4 text-success" />
                    ) : insight.impact === "Negative" ? (
                      <AlertTriangle className="w-4 h-4 text-destructive" />
                    ) : (
                      <Clock className="w-4 h-4 text-warning" />
                    )}
                    <Badge variant="outline" className="text-xs">
                      {insight.confidence}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Trading Signals */}
      <Card className="bg-gradient-to-br from-card to-secondary border-border">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-warning" />
            <span>AI Trading Signals</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tradingSignals.map((signal, index) => (
              <div key={index} className="p-4 rounded-lg bg-background/50 border border-border">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-accent" />
                      <span className="font-medium text-foreground">{signal.symbol}</span>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`${
                        signal.signal === "Buy"
                          ? "text-success bg-success/10"
                          : signal.signal === "Sell"
                            ? "text-destructive bg-destructive/10"
                            : "text-warning bg-warning/10"
                      }`}
                    >
                      {signal.signal}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {signal.strength}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Entry</div>
                      <div className="font-medium text-foreground">{signal.entry}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Target</div>
                      <div className="font-medium text-success">{signal.target}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Stop Loss</div>
                      <div className="font-medium text-destructive">{signal.stop}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-card to-secondary border-border">
          <CardHeader>
            <CardTitle className="text-lg">Prediction Accuracy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">87.4%</div>
            <p className="text-sm text-muted-foreground mt-1">Last 30 days</p>
            <Progress value={87.4} className="mt-3" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-secondary border-border">
          <CardHeader>
            <CardTitle className="text-lg">Signal Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">73.2%</div>
            <p className="text-sm text-muted-foreground mt-1">Profitable signals</p>
            <Progress value={73.2} className="mt-3" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-secondary border-border">
          <CardHeader>
            <CardTitle className="text-lg">Model Confidence</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">91.7%</div>
            <p className="text-sm text-muted-foreground mt-1">Current analysis</p>
            <Progress value={91.7} className="mt-3" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIAnalysis;
