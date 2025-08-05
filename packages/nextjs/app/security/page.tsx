import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  FileText,
  Scan,
  Lock,
  Eye,
  AlertCircle,
  TrendingDown
} from "lucide-react";

const Security = () => {
  const securityScore = 78;
  
  const securityMetrics = [
    { label: "Smart Contract Audits", value: "5/5", status: "good", icon: CheckCircle },
    { label: "Liquidity Risk", value: "Low", status: "good", icon: CheckCircle },
    { label: "Token Approval Risks", value: "2 High Risk", status: "warning", icon: AlertTriangle },
    { label: "Wallet Security", value: "Secured", status: "good", icon: Lock },
  ];

  const riskAlerts = [
    {
      title: "High Token Approval Detected",
      description: "Unlimited approval given to SushiSwap router",
      severity: "High",
      token: "USDT",
      action: "Revoke approval"
    },
    {
      title: "Suspicious Transaction Pattern",
      description: "Unusual large transfers detected in your wallet",
      severity: "Medium",
      token: "ETH",
      action: "Review activity"
    },
    {
      title: "New DeFi Protocol Interaction",
      description: "First interaction with unaudited protocol",
      severity: "Medium",
      token: "LINK",
      action: "Verify protocol"
    },
  ];

  const auditReports = [
    {
      protocol: "Uniswap V3",
      auditor: "ConsenSys Diligence",
      score: 95,
      date: "2024-01-15",
      status: "Passed"
    },
    {
      protocol: "Compound V3",
      auditor: "OpenZeppelin",
      score: 92,
      date: "2024-01-10",
      status: "Passed"
    },
    {
      protocol: "Aave V3",
      auditor: "Trail of Bits",
      score: 88,
      date: "2024-01-05",
      status: "Passed"
    },
  ];

  const portfolioRisks = [
    { category: "Smart Contract Risk", percentage: 15, amount: "$37,162" },
    { category: "Liquidity Risk", percentage: 8, amount: "$19,828" },
    { category: "Price Volatility", percentage: 45, amount: "$111,533" },
    { category: "Regulatory Risk", percentage: 12, amount: "$29,742" },
    { category: "Bridge Risk", percentage: 20, amount: "$49,585" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Security & Risk Hub</h1>
          <p className="text-muted-foreground mt-2">
            Monitor and manage security risks across your DeFi portfolio
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm">
            <FileText className="w-4 h-4 mr-2" />
            Security Report
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
            <Scan className="w-4 h-4 mr-2" />
            Run Security Scan
          </Button>
        </div>
      </div>

      {/* Security Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Security Score */}
        <Card className="bg-gradient-to-br from-card to-secondary border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>Security Score</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">{securityScore}</div>
              <div className="text-sm text-muted-foreground">out of 100</div>
            </div>
            <Progress value={securityScore} className="h-3" />
            <Badge 
              variant="secondary" 
              className={`w-full justify-center ${
                securityScore >= 80 ? 'text-success bg-success/10' : 
                securityScore >= 60 ? 'text-warning bg-warning/10' :
                'text-destructive bg-destructive/10'
              }`}
            >
              {securityScore >= 80 ? 'Good Security' : 
               securityScore >= 60 ? 'Moderate Risk' : 'High Risk'}
            </Badge>
          </CardContent>
        </Card>

        {/* Security Metrics */}
        <Card className="lg:col-span-2 bg-gradient-to-br from-card to-secondary border-border">
          <CardHeader>
            <CardTitle>Security Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {securityMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                    <div className="flex items-center space-x-3">
                      <Icon className={`w-5 h-5 ${
                        metric.status === 'good' ? 'text-success' : 
                        metric.status === 'warning' ? 'text-warning' : 'text-destructive'
                      }`} />
                      <span className="font-medium text-foreground">{metric.label}</span>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={
                        metric.status === 'good' ? 'border-success text-success' : 
                        metric.status === 'warning' ? 'border-warning text-warning' : 'border-destructive text-destructive'
                      }
                    >
                      {metric.value}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Risk Alerts */}
      <Card className="bg-gradient-to-br from-card to-secondary border-border">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-warning" />
            <span>Active Risk Alerts</span>
            <Badge variant="destructive" className="ml-2">
              {riskAlerts.length}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskAlerts.map((alert, index) => (
              <div key={index} className="p-4 rounded-lg bg-background/50 border border-border">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className={`w-4 h-4 ${
                        alert.severity === 'High' ? 'text-destructive' : 'text-warning'
                      }`} />
                      <span className="font-medium text-foreground">{alert.title}</span>
                      <Badge 
                        variant="outline" 
                        className={
                          alert.severity === 'High' ? 'border-destructive text-destructive' : 'border-warning text-warning'
                        }
                      >
                        {alert.severity}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{alert.description}</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-muted-foreground">Token:</span>
                      <Badge variant="secondary">{alert.token}</Badge>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    {alert.action}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Audit Reports */}
        <Card className="bg-gradient-to-br from-card to-secondary border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-accent" />
              <span>Recent Audit Reports</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {auditReports.map((report, index) => (
                <div key={index} className="p-3 rounded-lg bg-background/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground">{report.protocol}</span>
                    <Badge variant="secondary" className="text-success bg-success/10">
                      {report.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    Audited by {report.auditor}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">Score:</span>
                      <span className="font-medium text-foreground">{report.score}/100</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{report.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Portfolio Risk Breakdown */}
        <Card className="bg-gradient-to-br from-card to-secondary border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingDown className="w-5 h-5 text-destructive" />
              <span>Portfolio Risk Breakdown</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {portfolioRisks.map((risk, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{risk.category}</span>
                    <div className="text-right">
                      <div className="text-sm font-medium text-foreground">{risk.percentage}%</div>
                      <div className="text-xs text-muted-foreground">{risk.amount}</div>
                    </div>
                  </div>
                  <Progress value={risk.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Security;