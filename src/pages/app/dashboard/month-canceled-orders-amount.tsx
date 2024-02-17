// export interface MonthRevenueCardProps {}

import { BookmarkX } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthCancelOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base  font-semibold">
          Cancelamento (mês)
        </CardTitle>
        <BookmarkX className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">32</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">-12%</span>{' '}
          em relação a ontem
        </p>
      </CardContent>
    </Card>
  )
}