import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Settings as SettingsIcon, 
  User, 
  Shield, 
  Bell,
  Wallet,
  Key,
  Eye,
  Download,
  Trash2,
  Save,
  RefreshCw
} from "lucide-react";

const Settings = () => {
  const connectedWallets = [
    {
      name: "MetaMask",
      address: "0x1234...5678",
      balance: "2.45 ETH",
      status: "Connected",
      network: "Ethereum"
    },
    {
      name: "WalletConnect",
      address: "0x9876...4321",
      balance: "1,250 USDT",
      status: "Connected",
      network: "Polygon"
    },
  ];

  const apiKeys = [
    {
      name: "Binance API",
      key: "***********1234",
      status: "Active",
      permissions: "Read/Trade",
      lastUsed: "2 hours ago"
    },
    {
      name: "CoinGecko API",
      key: "***********5678",
      status: "Active",
      permissions: "Read Only",
      lastUsed: "5 minutes ago"
    },
  ];

  const notificationSettings = [
    { label: "Price Alerts", description: "Get notified of significant price movements", enabled: true },
    { label: "Trade Confirmations", description: "Receive confirmation for executed trades", enabled: true },
    { label: "Strategy Updates", description: "Updates on automated strategy performance", enabled: true },
    { label: "Security Alerts", description: "Important security notifications", enabled: true },
    { label: "Weekly Reports", description: "Portfolio performance summaries", enabled: false },
    { label: "Market News", description: "Breaking news and market updates", enabled: false },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings & Profile</h1>
          <p className="text-muted-foreground mt-2">
            Manage your account, security, and trading preferences
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export Settings
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      <Card className="bg-gradient-to-br from-card to-secondary border-border">
        <CardContent className="p-6">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="wallets">Wallets</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile" className="mt-6">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <User className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">John Doe</h3>
                    <p className="text-muted-foreground">Pro Trader • Member since 2024</p>
                    <Badge variant="secondary" className="text-primary bg-primary/10">
                      Verified Account
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Display Name</label>
                      <Input defaultValue="John Doe" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address</label>
                      <Input defaultValue="john.doe@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Time Zone</label>
                      <Input defaultValue="UTC-8 (Pacific Time)" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone Number</label>
                      <Input defaultValue="+1 (555) 123-4567" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Country</label>
                      <Input defaultValue="United States" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Trading Experience</label>
                      <Input defaultValue="Advanced (5+ years)" />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="security" className="mt-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-background/50 border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Shield className="w-5 h-5 text-primary" />
                        <span>Two-Factor Authentication</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-foreground">Authenticator App</div>
                          <div className="text-sm text-muted-foreground">Google Authenticator</div>
                        </div>
                        <Badge variant="secondary" className="text-success bg-success/10">
                          Enabled
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Reconfigure 2FA
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-background/50 border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Key className="w-5 h-5 text-accent" />
                        <span>Password Security</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-sm text-muted-foreground">
                        Last changed: 30 days ago
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Change Password
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="bg-background/50 border-border">
                  <CardHeader>
                    <CardTitle>API Keys</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {apiKeys.map((api, index) => (
                        <div key={index} className="p-3 rounded-lg bg-background border border-border">
                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <div className="font-medium text-foreground">{api.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {api.key} • {api.permissions} • Last used: {api.lastUsed}
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge variant="secondary" className="text-success bg-success/10">
                                {api.status}
                              </Badge>
                              <Button variant="outline" size="sm">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" className="w-full">
                        <Key className="w-4 h-4 mr-2" />
                        Add New API Key
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="wallets" className="mt-6">
              <div className="space-y-6">
                <div className="space-y-4">
                  {connectedWallets.map((wallet, index) => (
                    <Card key={index} className="bg-background/50 border-border">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                              <Wallet className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div>
                              <div className="font-medium text-foreground">{wallet.name}</div>
                              <div className="text-sm text-muted-foreground">{wallet.address}</div>
                              <div className="text-sm text-muted-foreground">{wallet.network}</div>
                            </div>
                          </div>
                          <div className="text-right space-y-1">
                            <div className="font-medium text-foreground">{wallet.balance}</div>
                            <Badge variant="secondary" className="text-success bg-success/10">
                              {wallet.status}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full">
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect New Wallet
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="notifications" className="mt-6">
              <div className="space-y-6">
                <div className="space-y-4">
                  {notificationSettings.map((setting, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border">
                      <div className="space-y-1">
                        <div className="font-medium text-foreground">{setting.label}</div>
                        <div className="text-sm text-muted-foreground">{setting.description}</div>
                      </div>
                      <Switch checked={setting.enabled} />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="preferences" className="mt-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Trading Preferences</h3>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Default Slippage</label>
                      <Input defaultValue="0.5%" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Gas Price Strategy</label>
                      <Input defaultValue="Standard" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Default Trading Amount</label>
                      <Input defaultValue="$1,000" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Display Preferences</h3>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Currency Display</label>
                      <Input defaultValue="USD" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Price Precision</label>
                      <Input defaultValue="4 decimal places" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Chart Style</label>
                      <Input defaultValue="Candlestick" />
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

export default Settings;