"use client";

import Link from "next/link";
import {
  Activity,
  BarChart3,
  Brain,
  DollarSign,
  PieChart,
  Settings,
  Shield,
  TrendingUp,
  Wallet,
  Zap,
} from "lucide-react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { Button } from "~~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/ui/card";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  const quickStats = [
    { label: "Portfolio Value", value: "$124,567", change: "+12.4%", icon: DollarSign },
    { label: "24h P&L", value: "+$2,345", change: "+8.2%", icon: TrendingUp },
    { label: "Active Trades", value: "8", change: "2 new", icon: Activity },
    { label: "Win Rate", value: "73.2%", change: "+2.1%", icon: BarChart3 },
  ];

  const quickActions = [
    {
      title: "Start Trading",
      description: "Execute trades with advanced order types",
      href: "/trading",
      icon: TrendingUp,
    },
    { title: "AI Analysis", description: "Get AI-powered market insights", href: "/ai-analysis", icon: Brain },
    {
      title: "Portfolio Analytics",
      description: "View detailed performance metrics",
      href: "/analytics",
      icon: PieChart,
    },
    { title: "Strategy Builder", description: "Create automated trading strategies", href: "/strategy", icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Welcome to DeFiTrader</h1>
          <p className="text-muted-foreground text-lg">Advanced DeFi trading platform with AI-powered insights</p>
          {connectedAddress && (
            <div className="mt-4 flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Connected:</span>
              <Address address={connectedAddress} />
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-gradient-to-br from-card to-secondary border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-success">{stat.change}</p>
                    </div>
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <Link href={action.href}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                      <h3 className="font-semibold text-foreground">{action.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </CardContent>
                </Link>
              </Card>
            );
          })}
        </div>

        {/* Recent Activity & Quick Access */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="w-5 h-5" />
                <span>Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <div>
                      <p className="font-medium">ETH/USDT Buy Order</p>
                      <p className="text-sm text-muted-foreground">2 minutes ago</p>
                    </div>
                  </div>
                  <span className="text-success font-medium">+$1,234</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-warning rounded-full"></div>
                    <div>
                      <p className="font-medium">Strategy Alert</p>
                      <p className="text-sm text-muted-foreground">15 minutes ago</p>
                    </div>
                  </div>
                  <span className="text-warning font-medium">BTC Signal</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Access */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="w-5 h-5" />
                <span>Quick Access</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Link href="/security">
                  <Button variant="outline" className="w-full justify-start">
                    <Shield className="w-4 h-4 mr-2" />
                    Security Hub
                  </Button>
                </Link>
                <Link href="/settings">
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                </Link>
                {!connectedAddress && (
                  <Button className="w-full bg-gradient-to-r from-primary to-accent">
                    <Wallet className="w-4 h-4 mr-2" />
                    Connect Wallet
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
