import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, FileText, Clock, TrendingUp } from "lucide-react"

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Get invoice statistics
  const { data: invoices } = await supabase.from("invoices").select("*").eq("user_id", user?.id)

  const totalInvoices = invoices?.length || 0
  const paidInvoices = invoices?.filter((inv) => inv.status === "paid").length || 0
  const pendingInvoices = invoices?.filter((inv) => inv.status === "sent").length || 0
  const totalRevenue =
    invoices?.filter((inv) => inv.status === "paid").reduce((sum, inv) => sum + Number.parseFloat(inv.amount), 0) || 0

  const stats = [
    {
      title: "Total Revenue",
      value: `$${totalRevenue.toLocaleString()}`,
      description: "From paid invoices",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Total Invoices",
      value: totalInvoices.toString(),
      description: "All time",
      icon: FileText,
      color: "text-blue-600",
    },
    {
      title: "Pending Payment",
      value: pendingInvoices.toString(),
      description: "Awaiting payment",
      icon: Clock,
      color: "text-orange-600",
    },
    {
      title: "Paid Invoices",
      value: paidInvoices.toString(),
      description: "Successfully paid",
      icon: TrendingUp,
      color: "text-green-600",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your invoicing activity.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Invoices</CardTitle>
            <CardDescription>Your latest invoicing activity</CardDescription>
          </CardHeader>
          <CardContent>
            {invoices && invoices.length > 0 ? (
              <div className="space-y-4">
                {invoices.slice(0, 5).map((invoice) => (
                  <div key={invoice.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{invoice.client_name}</p>
                      <p className="text-sm text-muted-foreground">#{invoice.invoice_number}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${Number.parseFloat(invoice.amount).toLocaleString()}</p>
                      <p
                        className={`text-sm capitalize ${
                          invoice.status === "paid"
                            ? "text-green-600"
                            : invoice.status === "sent"
                              ? "text-orange-600"
                              : "text-gray-600"
                        }`}
                      >
                        {invoice.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No invoices yet. Create your first invoice to get started!</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks to help you get started</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-3">
              <a
                href="/dashboard/invoices/new"
                className="flex items-center p-3 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <FileText className="h-5 w-5 text-primary mr-3" />
                <div>
                  <p className="font-medium">Create New Invoice</p>
                  <p className="text-sm text-muted-foreground">Generate a professional invoice</p>
                </div>
              </a>
              <a
                href="/dashboard/invoices"
                className="flex items-center p-3 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <Clock className="h-5 w-5 text-orange-600 mr-3" />
                <div>
                  <p className="font-medium">View All Invoices</p>
                  <p className="text-sm text-muted-foreground">Manage your invoice history</p>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
