import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye } from "lucide-react";

const OrdersTable = () => {
  return (
    <Card className="bg-card">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Latest Orders</CardTitle>
        <Button variant="outline">View All</Button>
      </CardHeader>
      <CardContent>
        <Table className="bg-background rounded-md">
          <TableHeader>
            <TableRow>
              <TableHead className="p-4">Product</TableHead>
              <TableHead className="p-4">Qty</TableHead>
              <TableHead className="p-4">Amount</TableHead>
              <TableHead className="p-4">Status</TableHead>
              <TableHead className="p-4">Customer</TableHead>
              <TableHead className="p-4">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="p-4">
                iPhone 17 Pro Orange · 256GB
              </TableCell>
              <TableCell className="p-4">3</TableCell>
              <TableCell className="p-4">₹3,91,500</TableCell>
              <TableCell className="p-4">
                <Badge className="text-amber-600 bg-amber-200">Pending</Badge>
              </TableCell>
              <TableCell className="p-4">Giridhar</TableCell>
              <TableCell className="p-4">
                <Eye />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="p-4">
                iPhone 17 Pro Orange · 256GB
              </TableCell>
              <TableCell className="p-4">3</TableCell>
              <TableCell className="p-4">₹3,91,500</TableCell>
              <TableCell className="p-4">
                <Badge className="text-green-600 bg-green-200">Paid</Badge>
              </TableCell>
              <TableCell className="p-4">Giridhar</TableCell>
              <TableCell className="p-4">
                <Eye />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="p-4">
                iPhone 17 Pro Orange · 256GB
              </TableCell>
              <TableCell className="p-4">3</TableCell>
              <TableCell className="p-4">₹3,91,500</TableCell>
              <TableCell className="p-4">
                <Badge className="text-red-600 bg-red-200">Failed</Badge>
              </TableCell>
              <TableCell className="p-4">Giridhar</TableCell>
              <TableCell className="p-4">
                <Eye />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="p-4">
                iPhone 17 Pro Orange · 256GB
              </TableCell>
              <TableCell className="p-4">3</TableCell>
              <TableCell className="p-4">₹3,91,500</TableCell>
              <TableCell className="p-4">
                <Badge className="text-green-600 bg-green-200">Paid</Badge>
              </TableCell>
              <TableCell className="p-4">Giridhar</TableCell>
              <TableCell className="p-4">
                <Eye />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="p-4">
                iPhone 17 Pro Orange · 256GB
              </TableCell>
              <TableCell className="p-4">3</TableCell>
              <TableCell className="p-4">₹3,91,500</TableCell>
              <TableCell className="p-4">
                <Badge className="text-amber-600 bg-amber-200">Status</Badge>
              </TableCell>
              <TableCell className="p-4">Giridhar</TableCell>
              <TableCell className="p-4">
                <Eye />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default OrdersTable;
