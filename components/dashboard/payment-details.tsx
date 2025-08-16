"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  CreditCard, 
  Download, 
  DollarSign, 
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react"

interface Payment {
  totalCost: number
  paidAmount: number
  remainingBalance: number
  currency: string
  nextPayment: string
}

interface PaymentDetailsProps {
  payment: Payment
  compact?: boolean
}

export function PaymentDetails({ payment, compact = false }: PaymentDetailsProps) {
  const [paymentHistory] = useState([
    {
      id: "1",
      amount: 1500,
      date: "2024-01-15",
      status: "completed",
      description: "Initial payment"
    },
    {
      id: "2",
      amount: 1500,
      date: "2024-02-01",
      status: "completed",
      description: "Second installment"
    },
    {
      id: "3",
      amount: 2000,
      date: "2024-02-15",
      status: "pending",
      description: "Final payment"
    }
  ])

  const progressPercentage = (payment.paidAmount / payment.totalCost) * 100

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "pending":
        return <Clock className="h-4 w-4 text-orange-500" />
      case "overdue":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-slate-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "pending":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "overdue":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300"
    }
  }

  const handleDownloadInvoice = () => {
    // Simulate invoice download
    const link = document.createElement('a')
    link.href = '#'
    link.download = `invoice-${new Date().toISOString().split('T')[0]}.pdf`
    link.click()
  }

  if (compact) {
    return (
      <div className="space-y-4">
        {/* Payment Summary */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
            <p className="text-sm text-slate-600 dark:text-slate-400">Total Cost</p>
            <p className="text-xl font-bold text-slate-900 dark:text-white">
              {payment.currency} {payment.totalCost.toLocaleString()}
            </p>
          </div>
          <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
            <p className="text-sm text-slate-600 dark:text-slate-400">Paid</p>
            <p className="text-xl font-bold text-green-600 dark:text-green-400">
              {payment.currency} {payment.paidAmount.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">Payment Progress</span>
            <span className="font-medium text-slate-900 dark:text-white">
              {progressPercentage.toFixed(0)}%
            </span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        {/* Remaining Balance */}
        <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
          <p className="text-sm text-orange-600 dark:text-orange-400">Remaining Balance</p>
          <p className="text-lg font-bold text-orange-700 dark:text-orange-300">
            {payment.currency} {payment.remainingBalance.toLocaleString()}
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2">
          <Button size="sm" className="flex-1" onClick={handleDownloadInvoice}>
            <Download className="h-4 w-4 mr-2" />
            Download Invoice
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Payment Details
          </CardTitle>
          <CardDescription>
            Track your project payments and download invoices
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Payment Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <DollarSign className="h-8 w-8 text-slate-400 mx-auto mb-2" />
              <p className="text-sm text-slate-600 dark:text-slate-400">Total Cost</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {payment.currency} {payment.totalCost.toLocaleString()}
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-green-600 dark:text-green-400">Paid Amount</p>
              <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                {payment.currency} {payment.paidAmount.toLocaleString()}
              </p>
            </div>
            <div className="text-center p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <AlertCircle className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <p className="text-sm text-orange-600 dark:text-orange-400">Remaining</p>
              <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">
                {payment.currency} {payment.remainingBalance.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600 dark:text-slate-400">Payment Progress</span>
              <span className="font-medium text-slate-900 dark:text-white">
                {progressPercentage.toFixed(0)}% Complete
              </span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>

          {/* Next Payment */}
          <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-6">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Next Payment Due
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  {new Date(payment.nextPayment).toLocaleDateString()}
                </p>
              </div>
            </div>
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              {payment.currency} {payment.remainingBalance.toLocaleString()}
            </Badge>
          </div>

          {/* Payment History */}
          <div className="space-y-4">
            <h4 className="font-medium text-slate-900 dark:text-white">Payment History</h4>
            <div className="space-y-3">
              {paymentHistory.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(item.status)}
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        {payment.currency} {item.amount.toLocaleString()}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={getStatusColor(item.status)}>
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </Badge>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-6 border-t border-slate-200 dark:border-slate-700">
            <Button onClick={handleDownloadInvoice} className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Download Latest Invoice
            </Button>
            <Button variant="outline" className="flex-1">
              <CreditCard className="h-4 w-4 mr-2" />
              Make Payment
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 