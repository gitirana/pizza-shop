import { TOrderStatus } from '@/components/order-status'
import { api } from '@/lib/axios'

export interface GetOrdersDetails {
  orderId: string
}

export interface GetOrderDetailsCustomer {
  name: string
  email: string
  phone: string | null
}

export interface OrderProduct {
  name: string
}

export interface OrderItems {
  id: string
  priceInCents: number
  quantity: number
  product: OrderProduct
}

export interface GetOrdersDetailsResponse {
  id: string
  createdAt: string
  status: TOrderStatus
  totalInCents: number
  customer: GetOrderDetailsCustomer
  orderItems: OrderItems[]
}

export async function getOrdersDetails({ orderId }: GetOrdersDetails) {
  const response = await api.get<GetOrdersDetailsResponse>(`/orders/${orderId}`)

  return response.data
}
